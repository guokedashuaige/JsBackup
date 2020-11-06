//ToPrimitive
// 我们可以使用特殊的对象方法，对字符串和数值转换进行微调。
//
// 下面是三个类型转换的变体，被称为 “hint”，在 规范 中有详细介绍（译注：当一个对象被用在需要原始值的上下文中时，例如，在 alert 或数学运算中，对象会被转换为原始值）：
//"string"
// 对象到字符串的转换，当我们对期望一个字符串的对象执行操作时，如 “alert”：
// 输出
alert(obj);

// 将对象作为属性键
anotherObj[obj] = 123;

//"number"
// 对象到数字的转换，例如当我们进行数学运算时：
// 显式转换
let num = Number(obj);

// 数学运算（除了二进制加法）
let n = +obj; // 一元加法
let delta = date1 - date2;

// 小于/大于的比较
let greater = user1 > user2;

//"default"
// 在少数情况下发生，当运算符“不确定”期望值的类型时。
//
// 例如，二进制加法 + 可用于字符串（连接），也可以用于数字（相加），所以字符串和数字这两种类型都可以。因此，当二元加法得到对象类型的参数时，它将依据 "default" hint 来对其进行转换。
//
// 此外，如果对象被用于与字符串、数字或 symbol 进行 == 比较，这时到底应该进行哪种转换也不是很明确，因此使用 "default" hint。
// 二元加法使用默认 hint
let total = obj1 + obj2;

// obj == number 使用默认 hint
if (user == 1) {
};
//像 < 和 > 这样的小于/大于比较运算符，也可以同时用于字符串和数字。不过，它们使用 “number” hint，而不是 “default”。这是历史原因。
//
// 实际上，我们没有必要记住这些奇特的细节，除了一种情况（Date 对象，我们稍后会学到它）之外，所有内建对象都以和 "number" 相同的方式实现 "default" 转换。我们也可以这样做。

//为了进行转换，JavaScript 尝试查找并调用三个对象方法：
//
// 调用 obj[Symbol.toPrimitive](hint) —— 带有 symbol 键 Symbol.toPrimitive（系统 symbol）的方法，如果这个方法存在的话，
// 否则，如果 hint 是 "string" —— 尝试 obj.toString() 和 obj.valueOf()，无论哪个存在。
// 否则，如果 hint 是 "number" 或 "default" —— 尝试 obj.valueOf() 和 obj.toString()，无论哪个存在。

//Symbol.toPrimitive
// 我们从第一个方法开始。有一个名为 Symbol.toPrimitive 的内建 symbol，它被用来给转换方法命名，像这样：
obj[Symbol.toPrimitive] = function(hint) {
    // 返回一个原始值
    // hint = "string"、"number" 和 "default" 中的一个
}

//例如，这里 user 对象实现了它：
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500 