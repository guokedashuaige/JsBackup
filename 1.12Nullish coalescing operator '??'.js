//a ?? b 的结果是：
//
// 如果 a 是已定义的，则结果为 a，
// 如果 a 不是已定义的，则结果为 b。
// 换句话说，如果第一个参数不是 null/undefined，则 ?? 返回第一个参数。否则，返回第二个参数。
//
// 空值合并运算符并不是什么全新的东西。它只是一种获得两者中的第一个“已定义的”值的不错的语法
//我们可以使用我们已知的运算符重写 result = a ?? b，像这样
result = (a !== null && a !== undefined) ? a : b;

//我们想使用这些变量之一显示用户名，如果这些变量的值都是未定义的，则显示 “Anonymous”
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个已定义的值：
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
//或运算符 || 可以以与 ?? 运算符相同的方式使用。像我们在 上一章 所讲的那样。
//
// 例如，在上面的代码中，我们可以用 || 替换掉 ??，也可以获得相同的结果
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个真值：
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
//它们之间重要的区别是：
//
// || 返回第一个 真 值。
// ?? 返回第一个 已定义的 值。
// 换句话说，|| 无法区分 false、0、空字符串 "" 和 null/undefined。它们都一样 —— 假值（falsy values）。如果其中任何一个是 || 的第一个参数，那么我们将得到第二个参数作为结果

//优先级
// ?? 运算符的优先级相当低：在 MDN table 中为 5。因此，?? 在 = 和 ? 之前计算，但在大多数其他运算符（例如，+ 和 *）之后计算

//因此，如果我们需要在还有其他运算符的表达式中使用 ?? 进行取值，需要考虑加括号

//?? 与 && 或 || 一起使用
// 出于安全原因，JavaScript 禁止将 ?? 运算符与 && 和 || 运算符一起使用，除非使用括号明确指定了优先级

//总结
// 空值合并运算符 ?? 提供了一种从列表中选择第一个“已定义的”值的简便方式。
//
// 它被用于为变量分配默认值：
//
// // 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
// height = height ?? 100;
// ?? 运算符的优先级非常低，仅略高于 ? 和 =，因此在表达式中使用它时请考虑添加括号。
//
// 如果没有明确添加括号，不能将其与 || 或 && 一起使用。