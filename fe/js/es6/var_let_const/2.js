//全局作用域
{
    //代码块
    //申明了变量，属于当前块级作用域
    const name='deepseek';
    console.log(name);
}
//console.log(name);
//退出了循环
for(let i=0;i<10;i++){
    //同步代码
    console.log(i);
    //异步代码 i 10
    setTimeout(function(){
        console.log(`This number is ${i}`);
    },1000);

}//要写在{}外面


//console.log(i);
//块级作用域：let和const声明的变量只在当前块级作用域内有效，出了{}就没了。
//var：函数作用域，出了函数就没了。
//const：块级作用域，出了 {} 就没了。