//关注点分离，把js分离出来写

console.log('hello world');

const a = 1;//constant常量，不能修改
console.log(a);
let b = 2;//let声明的变量可以修改
b = 3;
console.log(b);

//var声明的变量可以修改，并且存在变量提升
var c = 4;
c = 5;
console.log(c);


//数据类型 String（字符串类型） Number（数字类型，不区分整数和浮点数） Boolean（布尔类型）
//  Null（空值类型） Undefined（未定义类型 变量声明了，但没有赋值。） Symbol（唯一值类型 ES6 新增，用来创建绝对唯一的值）


let str = 'hello';
console.log(str);
let num = 123;
console.log(num);
let bool = true;
console.log(bool);
let n = null;
console.log(n);
let u = undefined;
console.log(u);
let sym = Symbol('unique');
console.log(sym);

const username = 'admin';
const age = 30;
console.log("my name is " + username + ", I am " + age + " years old.");
console.log(`my name is ${username}, I am ${age} years old.`); //模板字符串，使用反引号``，可以直接在字符串中嵌入变量和表达式
console.log(`用户名: ${username}, 年龄: ${age}`);

//数组
//let arr = [1, 2, 3, 4, 5];
//const numbers = [10, 20, 30];
const fruits = ['apple', 'banana', 'orange'];
//console.log(arr);
//console.log(numbers);
console.log(fruits);

//删除数组中的元素
//arr.splice(2, 1); //从索引2开始删除1个元素
//arr.pop(); //删除数组最后一个元素
//console.log(arr);
//shanchu fruits中的元素
fruits.splice(1, 1); //从索引1开始删除1个元素
fruits.pop(); //删除数组最后一个元素
fruits.unshift('grape'); //在数组开头添加一个元素
fruits.shift(); //删除数组开头的元素
fruits.push('pear'); //在数组末尾添加一个元素
fruits[2]='watermelon'; //修改数组中索引为2的元素
Array.isArray(fruits); //判断fruits是否是一个数组
fruits.indexOf('apple'); //返回数组中元素'apple'的索引，如果不存在则返回-1
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for(let i=1;i<=10;i++){
    console.log(i);
}