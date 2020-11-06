//可选链 ?. 是一种访问嵌套对象属性的安全的方式。即使中间的属性不存在，也不会出现错误。
//可选链
// 如果可选链 ?. 前面部分是 undefined 或者 null，它会停止运算并返回 undefined
//如果一个属性既不是 null 也不是 undefined，那么它就“存在”。
//下面这是一种安全地访问 user.address.street 的方式：
let user = {}; // user 没有 address

alert( user?.address?.street ); // undefined （不报错）
//以 user?.address 的方式来读取 address 是可行的，即使对象 user 不存在：
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
//?. 语法使其前面的值成为可选值，但不会对其后面的起作用。
//
// 在上面的例子中，user?. 只允许 user 为 null/undefined。
//
// 另一方面，如果 user 存在，那么它必须具有 user.address 属性，否则 user?.address.street 在第二个点符号处会报错。

//不要过度使用可选链
// 我们应该只将 ?. 使用在一些东西可以不存在的地方。
//
// 例如，如果根据我们的代码逻辑，user 对象必须存在，但 address 是可选的，那么 user.address?.street 会更好。
//
// 所以，如果 user 恰巧因为失误变为 undefined，我们会看到一个编程错误并修复它。否则，代码中的错误在不恰当的地方被消除了，这会导致调试更加困难。

//?. 前的变量必须已声明
// 如果未声明变量 user，那么 user?.anything 会触发一个错误：
//
// // ReferenceError: user is not defined
// user?.address;





//总结
// 可选链 ?. 语法有三种形式：
//
// obj?.prop —— 如果 obj 存在则返回 obj.prop，否则返回 undefined。
// obj?.[prop] —— 如果 obj 存在则返回 obj[prop]，否则返回 undefined。
// obj.method?.() —— 如果 obj.method 存在则调用 obj.method()，否则返回 undefined。
// 正如我们所看到的，这些语法形式用起来都很简单直接。?. 检查左边部分是否为 null/undefined，如果不是则继续运算。
//
// ?. 链使我们能够安全地访问嵌套属性。
//
// 但是，我们应该谨慎地使用 ?.，仅在当左边部分不存在也没问题的情况下使用为宜。以保证在代码中有编程上的错误出现时，也不会对我们隐藏。