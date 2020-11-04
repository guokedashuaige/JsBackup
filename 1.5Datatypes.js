//在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）
//1.Number 类型

//2.BigInt 类型
//在 JavaScript 中，“number” 类型无法表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。这是其内部表示形式导致的技术限制。
//可以通过将 n 附加到整数字段的末尾来创建 BigInt 值。
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;

//3.String 类型
//在 JavaScript 中，有三种包含字符串的方式。
//
// 双引号："Hello".
// 单引号：'Hello'.
// 反引号：`Hello`.
//双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。
// 反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如：
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
//${…} 内的表达式会被计算，计算结果会成为字符串的一部分。可以在 ${…} 内放置任何东西：诸如名为 name 的变量，或者诸如 1 + 2 的算数表达式，或者其他一些更复杂的。
//
// 需要注意的是，这仅仅在反引号内有效，其他引号不允许这种嵌入。
//4.Boolean 类型（逻辑类型）

//5.“null” 值
//相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。
//
// JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。
//
// 上面的代码表示 age 是未知的

//6.“undefined” 值
//特殊值 undefined 和 null 一样自成类型。
//
// undefined 的含义是 未被赋值。
//
// 如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：
let age;

alert(age); // 弹出 "undefined"

//7.object 类型和 symbol 类型
//其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，object 则用于储存数据集合和更复杂的实体

//8.typeof 运算符
//typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。
//
// 它支持两种语法形式：
//
// 作为运算符：typeof x。
// 函数形式：typeof(x)。
// 换言之，有括号和没有括号，得到的结果是一样的。
//
// 对 typeof x 的调用会以字符串的形式返回数据类型：
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//最后三行可能需要额外的说明：
//
// Math 是一个提供数学运算的内建 object。此处仅作为一个 object 的示例。
// typeof null 的结果是 "object"。这是官方承认的 typeof 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。
// typeof alert 的结果是 "function"，因为 alert 在 JavaScript 语言中是一个函数。我们会在下一章学习函数，那时我们会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 object 类型。但是 typeof 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。
