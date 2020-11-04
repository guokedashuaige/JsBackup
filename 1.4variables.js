//The statement below creates (in other words: declares) a variable with the name “message”:
let message;
//we can put some data into it by using the assignment operator =:

message = 'Hello'; // store the string


alert(message); // 显示变量内容

let user = 'John';
let age = 25;
let message = 'Hello';

//变量命名
// JavaScript 的变量命名有两个限制：
//
// 变量名称必须仅包含字母，数字，符号 $ 和 _。
// 首字符必须非数字。

//下面的命名是有效的：
let $ = 1; // 使用 "$" 声明一个变量
let _ = 2; // 现在用 "_" 声明一个变量

alert($ + _); // 3

//下面的变量命名不正确：
// let 1a; // 不能以数字开始
//
// let my-name; // 连字符 '-' 不允许用于变量命名

//允许非英文字母，但不推荐
// 可以使用任何语言，包括西里尔字母（cyrillic letters）甚至是象形文字，就像这样：
let имя = '...';
let 我 = '...';

//有一张 保留字列表，这张表中的保留字无法用作变量命名，因为它们被用于编程语言本身了。
//
// 比如，let、class、return、function 都被保留了。

//声明一个常数（不变）变量，可以使用 const 而非 let：
const myBirthday = '18.04.1982';

//一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。
//
// 使用大写字母和下划线来命名这些常量。
//
// 例如，让我们以所谓的“web”（十六进制）格式为颜色声明常量：
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00