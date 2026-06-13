// var height = 100;
// // 局部作用域 global scope 全局作用域
// function setWidth(){
//     // 局部作用于变量      
//     var width = 100;
//     console.log(width, height);
// }
// setWidth();

//内部能访问外部，外部不能访问内部
// 全局 → 局部 ❌//console.log(width);
// 局部 → 全局 ✅
var age = 100;
if(age >12){
    // es6 常量 不可以改变的
   var dog=age*7;//改成var 就是全局变量了(不报错了)
   let x=111;
    console.log(dog);   
    dog++;
}
console.log(dog);
console.log(x);