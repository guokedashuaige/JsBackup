//对象比原始类型“更重”。它们需要额外的资源来支持运作

//当作对象的原始类型
// 以下是 JavaScript 创建者面临的悖论：
//
// 人们可能想对诸如字符串或数字之类的原始类型执行很多操作。最好将它们作为方法来访问。
// 原始类型必须尽可能的简单轻量。
// 而解决方案看起来多少有点尴尬，如下：
//
// 原始类型仍然是原始的。与预期相同，提供单个值
// JavaScript 允许访问字符串，数字，布尔值和 symbol 的方法和属性。
// 为了使它们起作用，创建了提供额外功能的特殊“对象包装器”，使用后即被销毁。
// “对象包装器”对于每种原始类型都是不同的，它们被称为 String、Number、Boolean 和 Symbol。因此，它们提供了不同的方法。

//例如，字符串方法 str.toUpperCase() 返回一个大写化处理的字符串。
//
// 用法演示如下：

let str = "Hello";

alert( str.toUpperCase() ); // HELLO

//以下是 str.toUpperCase() 中实际发生的情况：
//
// 字符串 str 是一个原始值。因此，在访问其属性时，会创建一个包含字符串字面值的特殊对象，并且具有有用的方法，例如 toUpperCase()。
// 该方法运行并返回一个新的字符串（由 alert 显示）。
// 特殊对象被销毁，只留下原始值 str

//原始类型可以提供方法，但它们依然是轻量级的。
//
// JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。但是它仍然必须遵守规范，并且表现得好像它创建了一样


//构造器 String/Number/Boolean 仅供内部使用
// 像 Java 这样的一些语言允许我们使用 new Number(1) 或 new Boolean(false) 等语法，明确地为原始类型创建“对象包装器”。
//
// 在 JavaScript 中，由于历史原因，这也是可以的，但极其 不推荐。因为这样会出问题
alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
//对象在 if 中始终为真，因此此处的 alert 将显示：
let zero = new Number(0);

if (zero) { // zero 为 true，因为它是一个对象
    alert( "zero is truthy?!?" );
}
//另一方面，调用不带 new（关键字）的 String/Number/Boolean 函数是完全理智和有用的。它们将一个值转换为相应的类型：转成字符串、数字或布尔值（原始类型）。
//
// 例如，下面完全是有效的：
let num = Number("123"); // 将字符串转成数字