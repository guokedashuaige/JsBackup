//if(...) 语句计算括号里的条件表达式，如果计算结果是 true，就会执行对应的代码块。
//条件运算符 ‘?’
// 有时我们需要根据一个条件去赋值一个变量
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);

//所谓的“条件”或“问号”运算符让我们可以更简短地达到目的。
//
// 这个运算符通过问号 ? 表示。有时它被称为三元运算符，被称为“三元”是因为该运算符中有三个操作数。实际上它是 JavaScript 中唯一一个有这么多操作数的运算符
let result = condition ? value1 : value2;
//计算条件结果，如果结果为真，则返回 value1，否则返回 value2

//技术上讲，我们可以省略 age > 18 外面的括号。问号运算符的优先级较低，所以它会在比较运算符 > 后执行。
// 比较运算符 "age > 18" 首先执行
//（不需要将其包含在括号中）
let accessAllowed = age > 18 ? true : false;

// 下面代码同样可以实现
let accessAllowed = age > 18;
//多个 ‘?’
// 使用一系列问号 ? 运算符可以返回一个取决于多个条件的值
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert( message );
//第一个问号检查 age < 3。
// 如果为真 — 返回 'Hi, baby!'。否则，会继续执行冒号 ":" 后的表达式，检查 age < 18。
// 如果为真 — 返回 'Hello!'。否则，会继续执行下一个冒号 ":" 后的表达式，检查 age < 100。
// 如果为真 — 返回 'Greetings!'。否则，会继续执行最后一个冒号 ":" 后面的表达式，返回 'What an unusual age!'。

//这是使用 if..else 实现上面的逻辑的写法：
if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}

//使用 if..else 结构，实现提问 “What is the “official” name of JavaScript?” 的代码
//
// 如果访问者输入了 “ECMAScript”，输出就提示 “Right!”，否则 — 输出：“Didn’t know? ECMAScript!”
'use strict';

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

//使用条件运算符 '?' 重写下面的 if 语句：
let result;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

let result = (a + b < 4) ? 'Below' : 'Over';

//使用多个三元运算符 '?' 重写下面的 if..else 语句。
//
// 为了增强代码可读性，建议将代码分成多行。

let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}


let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';