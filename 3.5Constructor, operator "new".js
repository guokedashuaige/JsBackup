//构造函数
//常规的 {...} 语法允许创建一个对象。但是我们经常需要创建许多类似的对象，例如多个用户或菜单项等。
//
// 这可以使用构造函数和 "new" 操作符来实现。
// 构造函数在技术上是常规函数。不过有两个约定：
//
// 它们的命名以大写字母开头。
// 它们只能由 "new" 操作符来执行。
//例如：
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
//当一个函数被使用 new 操作符执行时，它按照以下步骤：
//
// 一个新的空对象被创建并分配给 this。
// 函数体执行。通常它会修改 this，为其添加新的属性。
// 返回 this 的值。

//换句话说，new User(...) 做的就是类似的事情：
function User(name) {
    // this = {};（隐式创建）

    // 添加属性到 this
    this.name = name;
    this.isAdmin = false;

    // return this;（隐式返回）
}

//所以 new User("Jack") 的结果是相同的对象：
let user = {
    name: "Jack",
    isAdmin: false
};


//现在，如果我们想创建其他用户，我们可以调用 new User("Ann")，new User("Alice") 等。比每次都使用字面量创建要短得多，而且更易于阅读。
//
// 这是构造器的主要目的 —— 实现可重用的对象创建代码。
//
// 让我们再强调一遍 —— 从技术上讲，任何函数都可以用作构造器。即：任何函数都可以通过 new 来运行，它会执行上面的算法。“首字母大写”是一个共同的约定，以明确表示一个函数将被使用 new 来运行。

//构造器模式测试：new.target