//文本和属性
// 我们可以在创建对象的时候，立即将一些属性以键值对的形式放到 {...} 中。

let user = {     // 一个对象
    name: "John",  // 键 "name"，值 "John"
    age: 30        // 键 "age"，值 30
};

//可以使用点符号访问属性值：
// 读取文件的属性：
alert( user.name ); // John
alert( user.age ); // 30
//属性的值可以是任意类型，让我们加个布尔类型：
user.isAdmin = true;
//我们可以用 delete 操作符移除属性：
delete user.age;
//我们也可以用多字词语来作为属性名，但必须给它们加上引号：
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // 多词属性名必须加引号
};
//使用 const 声明的对象是可以被修改的
// 请注意：用 const 声明的对象 能 被修改。
//
// 例如：
const user = {
    name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
//const 声明仅固定了 user 的值，而不是值（该对象）里面的内容。

//使用方括号，可用于任何字符串：
let user = {};

// 设置
user["likes birds"] = true;

// 读取
alert(user["likes birds"]); // true

// 删除
delete user["likes birds"];

let key = "likes birds";

// 跟 user["likes birds"] = true; 一样
user[key] = true;

//方括号同样提供了一种可以通过任意表达式来获取属性名的方法 —— 跟语义上的字符串不同 —— 比如像类似于下面的变量
let key = "likes birds";

// 跟 user["likes birds"] = true; 一样
user[key] = true;

//在这里，变量 key 可以是程序运行时计算得到的，也可以是根据用户的输入得到的。然后我们可以用它来访问属性。这给了我们很大的灵活性。
let user = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// 访问变量
alert( user[key] ); // John（如果输入 "name"）

//大部分时间里，当属性名是已知且简单的时候，就使用点符号。如果我们需要一些更复杂的内容，那么就用方括号。

//总结
// 对象是具有一些特殊特性的关联数组。
//
// 它们存储属性（键值对），其中：
//
// 属性的键必须是字符串或者 symbol（通常是字符串）。
// 值可以是任何类型。
// 我们可以用下面的方法访问属性：
//
// 点符号: obj.property。
// 方括号 obj["property"]，方括号允许从变量中获取键，例如 obj[varWithKey]。
// 其他操作：
//
// 删除属性：delete obj.prop。
// 检查是否存在给定键的属性："key" in obj。
// 遍历对象：for(let key in obj) 循环。
// 我们在这一章学习的叫做“普通对象（plain object）”，或者就叫对象。
//
// JavaScript 中还有很多其他类型的对象：
//
// Array 用于存储有序数据集合，
// Date 用于存储时间日期，
// Error 用于存储错误信息。
// ……等等。







//按下面的要求写代码，一条对应一行代码：
//
// 创建一个空的对象 user。
// 为这个对象增加一个属性，键是 name，值是 John。
// 再增加一个属性，键是 surname，值是 Smith。
// 把键为 name 的属性的值改成 Pete。
// 删除这个对象中键为 name 的属性。

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//写一个 isEmpty(obj) 函数，当对象没有属性的时候返回 true，否则返回 false
//应该像这样：
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

//只需要遍历这个对象，如果对象存在任何属性则 return false
function isEmpty(obj) {
    for (let key in obj) {
        // 如果进到循环里面，说明有属性。
        return false;
    }
    return true;
}

//我们有一个保存着团队成员工资的对象：
//
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// 写一段代码求出我们的工资总和，将计算结果保存到变量 sum。从所给的信息来看，结果应该是 390。
//
// 如果 salaries 是一个空对象，那结果就为 0。
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); // 390

//创建一个 multiplyNumeric(obj) 函数，把 obj 所有的数值属性值都乘以 2
//例如：
//
// // 在调用之前
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// multiplyNumeric(menu);
//
// // 调用函数之后
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// 注意 multiplyNumeric 函数不需要返回任何值，它应该就地修改对象。
//
// P.S. 用 typeof 检查值类型。


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}