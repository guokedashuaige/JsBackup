let func = (arg1, arg2, ...argN) => expression
//是下面这段代码的更短的版本：
let func = function(arg1, arg2, ...argN) {
    return expression;
};


//一个具体的例子：
let sum = (a, b) => a + b;

/* 这个箭头函数是下面这个函数的更短的版本：

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


//如果没有参数，括号将是空的（但括号应该保留）：
let sayHi = () => alert("Hello!");

sayHi();

//箭头函数可以像函数表达式一样使用。
//
// 例如，动态创建一个函数
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert("Greetings!");

welcome();

//多行的箭头函数
// 上面的例子从 => 的左侧获取参数，然后使用参数计算右侧表达式的值。
//
// 但有时我们需要更复杂一点的东西，比如多行的表达式或语句。这也是可以做到的，但是我们应该用花括号括起来。然后使用一个普通的 return 将需要返回的值进行返回
let sum = (a, b) => {  // 花括号表示开始一个多行函数
    let result = a + b;
    return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert( sum(1, 2) ); // 3


//总结
// 对于一行代码的函数来说，箭头函数是相当方便的。它具体有两种：
//
// 不带花括号：(...args) => expression — 右侧是一个表达式：函数计算表达式并返回其结果。
// 带花括号：(...args) => { body } — 花括号允许我们在函数中编写多个语句，但是我们需要显式地 return 来返回一些内容。