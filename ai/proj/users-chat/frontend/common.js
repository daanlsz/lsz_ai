// 后端接口地址
const url = "http://localhost:3000/users";

// 1. 页面一打开就执行
window.onload = function () {
  console.log("✅ common.js 加载成功！");
  getUserList(); // 获取用户列表
};

// 2. 获取用户列表
async function getUserList() {
  let res = await fetch(url);
  let list = await res.json();

  console.log("📦 拿到用户数据：", list);
  render(list); // 渲染到页面
}

// 3. 把数据渲染到页面表格
function render(list) {
  let tbody = document.getElementById("userTable");

  let str = "";
  list.forEach((item) => {
    str += `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.hometown}</td>
      <td>
        <button onclick="del(${item.id})" class="btn btn-danger btn-sm">删除</button>
      </td>
    </tr>
    `;
  });

  tbody.innerHTML = str;
}

// 4. 删除功能
async function del(id) {
  await fetch(`${url}/${id}`, { method: "DELETE" });
  getUserList(); // 刷新列表
}