(function(){
    // ====================== 全局常量配置 ======================
    const GRID_SIZE = 8;
    const CELL_SIZE = 2;
    let THREE = window.THREE;

    // 全局数据
    let scene, camera, renderer;
    let worldData = []; // world[x][z] = {terrain, kind}
    let cellMeshMap = new Map();
    let hoverMesh = null;
    let selectTool = "grass";

    // 视角拖拽变量
    let isDrag = false;
    let dragStartX = 0, dragStartY = 0;
    let rotateX = 0.6, rotateY = 0.8;
    let cameraDist = 18;

    // 本地存储key
    const SAVE_KEY = "miniTableWorldData";

    // ====================== 1. 初始化数据结构 ======================
    function initWorldData(){
        worldData = [];
        for(let x=0;x<GRID_SIZE;x++){
            worldData[x] = [];
            for(let z=0;z<GRID_SIZE;z++){
                worldData[x][z] = {
                    terrain: "grass",
                    kind: "empty"
                };
            }
        }
    }

    // 唯一写入入口
    function setCell(x,z,terrain,kind="empty"){
        if(x<0||x>=GRID_SIZE||z<0||z>=GRID_SIZE) return;
        worldData[x][z].terrain = terrain;
        worldData[x][z].kind = kind;
        refreshSingleCell(x,z);
        updateMiniMap();
        saveToLocal();
    }

    // ====================== 2. 场景光照初始化 ======================
    function initSceneEnv(){
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xbfeaff);

        // 相机
        camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
        updateCameraPos();

        // 渲染器
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        document.getElementById("worldContainer").appendChild(renderer.domElement);

        // 灯光
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(15,25,15);
        dirLight.castShadow = true;
        scene.add(dirLight);
        const ambLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambLight);

        createHoverPlane();
    }

    // 悬浮预览格子
    function createHoverPlane(){
        const geo = new THREE.PlaneGeometry(CELL_SIZE-0.2, CELL_SIZE-0.2);
        const mat = new THREE.MeshBasicMaterial({
            color:0xffffff, transparent:true, opacity:0.3, side:THREE.DoubleSide
        });
        hoverMesh = new THREE.Mesh(geo, mat);
        hoverMesh.rotation.x = -Math.PI/2;
        hoverMesh.visible = false;
        scene.add(hoverMesh);
    }

    function updateCameraPos(){
        const x = cameraDist * Math.sin(rotateY) * Math.cos(rotateX);
        const y = cameraDist * Math.sin(rotateX);
        const z = cameraDist * Math.cos(rotateY) * Math.cos(rotateX);
        camera.position.set(x,y,z);
        camera.lookAt(0,0,0);
    }

    // ====================== 3. 物体工厂构建 ======================
    function createTerrainMesh(type){
        let geo, mat;
        switch(type){
            case "grass":
                geo = new THREE.BoxGeometry(CELL_SIZE,0.2,CELL_SIZE);
                mat = new THREE.MeshLambertMaterial({color:0x54c560});
                break;
            case "road":
                geo = new THREE.BoxGeometry(CELL_SIZE,0.18,CELL_SIZE);
                mat = new THREE.MeshLambertMaterial({color:0xc2a070});
                break;
            case "water":
                geo = new THREE.BoxGeometry(CELL_SIZE,0.12,CELL_SIZE);
                mat = new THREE.MeshLambertMaterial({color:0x50a8e8, transparent:true, opacity:0.7});
                break;
            default:
                geo = new THREE.BoxGeometry(CELL_SIZE,0.2,CELL_SIZE);
                mat = new THREE.MeshLambertMaterial({color:0x54c560});
        }
        const mesh = new THREE.Mesh(geo, mat);
        mesh.receiveShadow = true;
        return mesh;
    }

    function createObjMesh(kind){
        let group = new THREE.Group();
        switch(kind){
            case "stone":
                const stGeo = new THREE.IcosahedronGeometry(0.6,0);
                const stMat = new THREE.MeshLambertMaterial({color:0x888888});
                const stone = new THREE.Mesh(stGeo,stMat);
                stone.position.y = 0.4;
                group.add(stone);
                break;
            case "tree":
                const trunkG = new THREE.CylinderGeometry(0.15,0.2,1.2,6);
                const trunkM = new THREE.MeshLambertMaterial({color:0x704e30});
                const trunk = new THREE.Mesh(trunkG,trunkM);
                trunk.position.y = 0.6;
                const leafG = new THREE.ConeGeometry(0.8,1.5,8);
                const leafM = new THREE.MeshLambertMaterial({color:0x298030});
                const leaf = new THREE.Mesh(leafG,leafM);
                leaf.position.y = 1.8;
                group.add(trunk,leaf);
                break;
            case "house":
                const wallG = new THREE.BoxGeometry(1.4,1,1.4);
                const wallM = new THREE.MeshLambertMaterial({color:0xffe299});
                const wall = new THREE.Mesh(wallG,wallM);
                wall.position.y = 0.5;
                const roofG = new THREE.ConeGeometry(1.1,0.9,4);
                const roofM = new THREE.MeshLambertMaterial({color:0xe54545});
                const roof = new THREE.Mesh(roofG,roofM);
                roof.position.y = 1.45;
                roof.rotation.y = Math.PI/4;
                group.add(wall,roof);
                break;
        }
        group.castShadow = true;
        return group;
    }

    // 刷新单个格子
    function refreshSingleCell(x,z){
        const offset = (GRID_SIZE * CELL_SIZE)/2 - CELL_SIZE/2;
        const px = x * CELL_SIZE - offset;
        const pz = z * CELL_SIZE - offset;
        const key = `${x}_${z}`;

        if(cellMeshMap.has(key)){
            const oldArr = cellMeshMap.get(key);
            oldArr.forEach(item=>scene.remove(item));
        }

        const cellData = worldData[x][z];
        const terrainMesh = createTerrainMesh(cellData.terrain);
        terrainMesh.position.set(px,0,pz);
        scene.add(terrainMesh);
        let allItem = [terrainMesh];

        if(cellData.kind !== "empty"){
            const obj = createObjMesh(cellData.kind);
            obj.position.set(px,0,pz);
            scene.add(obj);
            allItem.push(obj);
        }
        cellMeshMap.set(key, allItem);
    }

    // 初始化全地图
    function buildAllWorld(){
        for(let x=0;x<GRID_SIZE;x++){
            for(let z=0;z<GRID_SIZE;z++){
                refreshSingleCell(x,z);
            }
        }
    }

    // ====================== 4. 交互事件绑定 ======================
    function bindInteraction(){
        const canvas = renderer.domElement;
        // 鼠标拖拽旋转
        canvas.addEventListener("mousedown",e=>{
            isDrag = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
        });
        window.addEventListener("mousemove",e=>{
            if(isDrag){
                const dx = e.clientX - dragStartX;
                const dy = e.clientY - dragStartY;
                rotateY += dx * 0.005;
                rotateX = Math.max(0.2, Math.min(1.2, rotateX - dy*0.005));
                updateCameraPos();
                dragStartX = e.clientX;
                dragStartY = e.clientY;
            }
            hoverCheck(e);
        });
        window.addEventListener("mouseup",()=>isDrag=false);

        // 滚轮缩放
        canvas.addEventListener("wheel",e=>{
            cameraDist = Math.max(10, Math.min(30, cameraDist + e.deltaY*0.015));
            updateCameraPos();
        });

        // 点击放置
        canvas.addEventListener("click",e=>{
            const pos = getGridByMouse(e);
            if(!pos) return;
            const {gx,gz} = pos;
            handlePlace(gx,gz);
        });

        // 工具切换
        document.querySelectorAll(".tool-item").forEach(item=>{
            item.addEventListener("click",()=>{
                document.querySelectorAll(".tool-item").forEach(i=>i.classList.remove("active"));
                item.classList.add("active");
                selectTool = item.dataset.type;
            });
        });

        // 重置视角
        document.getElementById("resetBtn").addEventListener("click",()=>{
            rotateX = 0.6;
            rotateY = 0.8;
            cameraDist = 18;
            updateCameraPos();
        });

        // 一键清空全变草地
        document.getElementById("clearAllBtn").addEventListener("click",()=>{
            for(let x=0;x<GRID_SIZE;x++){
                for(let z=0;z<GRID_SIZE;z++){
                    setCell(x,z,"grass","empty");
                }
            }
        });

        // 窗口适配
        window.addEventListener("resize",()=>{
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // 鼠标拾取格子
    function getGridByMouse(e){
        const rect = renderer.domElement.getBoundingClientRect();
        const mx = ((e.clientX - rect.left)/rect.width)*2 -1;
        const my = -((e.clientY - rect.top)/rect.height)*2 +1;
        const ray = new THREE.Raycaster();
        ray.setFromCamera({x:mx,y:my}, camera);
        const intersect = ray.intersectObjects(scene.children, true)[0];
        if(!intersect) return null;
        const p = intersect.point;
        const offset = (GRID_SIZE*CELL_SIZE)/2 - CELL_SIZE/2;
        const gx = Math.round((p.x + offset)/CELL_SIZE);
        const gz = Math.round((p.z + offset)/CELL_SIZE);
        if(gx<0||gx>=GRID_SIZE||gz<0||gz>=GRID_SIZE) return null;
        return {gx,gz, worldX:p.x, worldZ:p.z};
    }

    // 鼠标悬停预览
    function hoverCheck(e){
        const res = getGridByMouse(e);
        if(!res){
            hoverMesh.visible = false;
            return;
        }
        hoverMesh.visible = true;
        hoverMesh.position.set(res.worldX, 0.05, res.worldZ);
    }

    // 放置逻辑
    function handlePlace(x,z){
        switch(selectTool){
            case "grass":
                setCell(x,z,"grass","empty");break;
            case "road":
                setCell(x,z,"road","empty");break;
            case "water":
                setCell(x,z,"water","empty");break;
            case "stone":
                setCell(x,z,worldData[x][z].terrain,"stone");break;
            case "tree":
                setCell(x,z,worldData[x][z].terrain,"tree");break;
            case "house":
                setCell(x,z,worldData[x][z].terrain,"house");break;
            case "erase":
                setCell(x,z,"grass","empty");break;
        }
    }

    // ====================== 5. 本地持久化存储 ======================
    function saveToLocal(){
        localStorage.setItem(SAVE_KEY, JSON.stringify(worldData));
    }
    function loadFromLocal(){
        const str = localStorage.getItem(SAVE_KEY);
        if(!str) return false;
        try{
            const data = JSON.parse(str);
            for(let x=0;x<GRID_SIZE;x++){
                for(let z=0;z<GRID_SIZE;z++){
                    if(data[x]&&data[x][z]) worldData[x][z] = data[x][z];
                }
            }
            return true;
        }catch(e){
            return false;
        }
    }

    // ====================== 6. 2D俯视小地图 ======================
    function updateMiniMap(){
        const canvas = document.getElementById("miniMapCanvas");
        const ctx = canvas.getContext("2d");
        const cellW = canvas.width / GRID_SIZE;
        const cellH = canvas.height / GRID_SIZE;
        ctx.clearRect(0,0,canvas.width,canvas.height);

        for(let x=0;x<GRID_SIZE;x++){
            for(let z=0;z<GRID_SIZE;z++){
                const d = worldData[x][z];
                // 地形底色
                switch(d.terrain){
                    case "grass": ctx.fillStyle="#54c560";break;
                    case "road": ctx.fillStyle="#c2a070";break;
                    case "water": ctx.fillStyle="#50a8e8";break;
                    default: ctx.fillStyle="#54c560";
                }
                ctx.fillRect(x*cellW,z*cellH,cellW,cellH);
                // 物体剪影
                ctx.fillStyle="#222222";
                if(d.kind==="stone"){
                    ctx.beginPath();
                    ctx.arc(x*cellW+cellW/2,z*cellH+cellH/2,4,0,Math.PI*2);
                    ctx.fill();
                }
                if(d.kind==="tree"){
                    ctx.fillRect(x*cellW+6,z*cellH+4,4,8);
                }
                if(d.kind==="house"){
                    ctx.fillRect(x*cellW+3,z*cellH+3,10,10);
                }
            }
        }
    }

    // ====================== 7. 动画渲染启动 ======================
    function animateLoop(){
        requestAnimationFrame(animateLoop);
        renderer.render(scene,camera);
    }

    // 项目总入口
    function initAll(){
        initWorldData();
        loadFromLocal();
        initSceneEnv();
        buildAllWorld();
        bindInteraction();
        updateMiniMap();
        animateLoop();
    }

    // 启动
    initAll();
})();