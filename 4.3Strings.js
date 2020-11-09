//在 JavaScript 中，文本数据被以字符串形式存储，单个字符没有单独的类型。
//
// 字符串的内部格式始终是 UTF-16，它不依赖于页面编码。
//字符串可以包含在单引号、双引号或反引号中：
//
// let single = 'single-quoted';
// let double = "double-quoted";
//
// let backticks = `backticks`;
// 单引号和双引号基本相同。但是，反引号允许我们通过 ${…} 将任何表达式嵌入到字符串中：
function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
//使用反引号的另一个优点是它们允许字符串跨行：
//
// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
//
// alert(guestList); // 客人清单，多行


//反引号还允许我们在第一个反引号之前指定一个“模版函数”。语法是：func`string`。函数 func 被自动调用，接收字符串和嵌入式表达式，并处理它们。你可以在 docs 中阅读更多关于它们的信息。这叫做 “tagged templates”。此功能可以更轻松地将字符串包装到自定义模版或其他函数中，但这很少使用


//特殊字符
// 我们仍然可以通过使用“换行符（newline character）”，以支持使用单引号和双引号来创建跨行字符串。换行符写作 \n，用来表示换行：
//
// let guestList = "Guests:\n * John\n * Pete\n * Mary";
//
// alert(guestList); // 一个多行的客人列表
// 例如，这两行描述的是一样的，只是书写方式不同：
//
// let str1 = "Hello\nWorld"; // 使用“换行符”创建的两行字符串
//
// // 使用反引号和普通的换行创建的两行字符串
// let str2 = `Hello
// World`;
//
// alert(str1 == str2); // true


//这是完整列表：
//
// 字符	描述
// \n	换行
// \r	回车：不单独使用。Windows 文本文件使用两个字符 \r\n 的组合来表示换行。
// \', \"	引号
// \\	反斜线
// \t	制表符
// \b, \f, \v	退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。
// \xXX	具有给定十六进制 Unicode XX 的 Unicode 字符，例如：'\x7A' 和 'z' 相同。
// \uXXXX	以 UTF-16 编码的十六进制代码 XXXX 的 unicode 字符，例如 \u00A9 —— 是版权符号 © 的 unicode。它必须正好是 4 个十六进制数字。
// \u{X…XXXXXX}（1 到 6 个十六进制字符）	具有给定 UTF-32 编码的 unicode 符号。一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。

//unicode 示例：
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫，罕见的中国象形文字（长 unicode）
alert( "\u{1F60D}" ); // 😍，笑脸符号（另一个长 unicode）
//所有的特殊字符都以反斜杠字符 \ 开始。它也被称为“转义字符”。
//
// 如果我们想要在字符串中插入一个引号，我们也会使用它。
//
// 例如：
//
// alert( 'I\'m the Walrus!' ); // I'm the Walrus!
//当然，只有与外部闭合引号相同的引号才需要转义。因此，作为一个更优雅的解决方案，我们可以改用双引号或者反引号：
//
// alert( `I'm the Walrus!` ); // I'm the Walrus!

//注意反斜杠 \ 在 JavaScript 中用于正确读取字符串，然后消失。内存中的字符串没有 \。你从上述示例中的 alert 可以清楚地看到这一点。
//
// 但是如果我们需要在字符串中显示一个实际的反斜杠 \ 应该怎么做？
//
// 我们可以这样做，只需要将其书写两次 \\：
//
// alert( `The backslash: \\` ); // The backslash: \


//字符串长度
// length 属性表示字符串长度：
//
alert( `My\n`.length ); // 3
// 注意 \n 是一个单独的“特殊”字符，所以长度确实是 3。
//
// length 是一个属性
// 掌握其他编程语言的人，有时会错误地调用 str.length() 而不是 str.length。这是行不通的。
//
// 请注意 str.length 是一个数字属性，而不是函数。后面不需要添加括号。

//
//访问字符
//要获取在 pos 位置的一个字符，可以使用方括号 [pos] 或者调用 str.charAt(pos) 方法。第一个字符从零位置开始：
let str = `Hello`;

// 第一个字符
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// 最后一个字符
alert( str[str.length - 1] ); // o
//方括号是获取字符的一种现代化方法，而 charAt 是历史原因才存在的。
//
// 它们之间的唯一区别是，如果没有找到字符，[] 返回 undefined，而 charAt 返回一个空字符串：
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''（空字符串）

//我们也可以使用 for..of 遍历字符：
for (let char of "Hello") {
    alert(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}

//字符串是不可变的
// 在 JavaScript 中，字符串不可更改。改变字符是不可能的。
//
// 我们证明一下为什么不可能：
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // 无法运行

//通常的解决方法是创建一个新的字符串，并将其分配给 str 而不是以前的字符串。
//
// 例如：
let str = 'Hi';

str = 'h' + str[1];  // 替换字符串

alert( str ); // hi


//改变大小写
// toLowerCase() 和 toUpperCase() 方法可以改变大小写：
//
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface
// 或者我们想要使一个字符变成小写：
//
// alert( 'Interface'[0].toLowerCase() ); // 'i'


//查找子字符串
// 在字符串中查找子字符串有很多种方法。
//
// str.indexOf
// 第一个方法是 str.indexOf(substr, pos)。
//
// 它从给定位置 pos 开始，在 str 中查找 substr，如果没有找到，则返回 -1，否则返回匹配成功的位置。
//
// 例如：
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0，因为 'Widget' 一开始就被找到
alert( str.indexOf('widget') ); // -1，没有找到，检索是大小写敏感的

alert( str.indexOf("id") ); // 1，"id" 在位置 1 处（……idget 和 id）

//可选的第二个参数允许我们从给定的起始位置开始检索。
//
// 例如，"id" 第一次出现的位置是 1。查询下一个存在位置时，我们从 2 开始检索：
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12

//如果我们对所有存在位置都感兴趣，可以在一个循环中使用 indexOf。每一次新的调用都发生在上一匹配位置之后：
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // 这是我们要查找的目标

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert( `Found at ${foundPos}` );
    pos = foundPos + 1; // 继续从下一个位置查找
}