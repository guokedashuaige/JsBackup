//在 JavaScript 中，行为（action）由属性中的函数来表示

//方法示例
// 刚开始，我们来教 user 说 hello：
let user = {
    name: "John",
    age: 30
};

user.sayHi = function() {
    alert("Hello!");
};

user.sayHi(); // Hello!

//这里我们使用函数表达式创建了一个函数，并将其指定给对象的 user.sayHi 属性。
//
// 随后我们像这样 user.sayHi() 调用它。用户现在可以说话了！
//
// 作为对象属性的函数被称为 方法。
//所以，在这我们得到了 user 对象的 sayHi 方法。

//当然，我们也可以使用预先声明的函数作为方法，就像这样：
let user = {
    // ...
};

// 首先，声明函数
function sayHi() {
    alert("Hello!");
};

// 然后将其作为一个方法添加
user.sayHi = sayHi;

user.sayHi(); // Hello!

//方法简写
// 在对象字面量中，有一种更短的（声明）方法的语法
// 这些对象作用一样

user = {
    sayHi: function() {
        alert("Hello");
    }
};

// 方法简写看起来更好，对吧？
let user = {
    sayHi() { // 与 "sayHi: function()" 一样
        alert("Hello");
    }
};

//如上所示，我们可以省略 "function"，只写 sayHi()。
//
// 说实话，这种表示法还是有些不同。在对象继承方面有一些细微的差别（稍后将会介绍），但目前它们并不重要。在几乎所有的情况下，较短的语法是首选的。

//方法中的 “this”
// 通常，对象方法需要访问对象中存储的信息才能完成其工作。
//
// 例如，user.sayHi() 中的代码可能需要用到 user 的 name 属性。
//
// 为了访问该对象，方法中可以使用 this 关键字。

let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" 指的是“当前的对象”
        alert(this.name);
    }

};

user.sayHi(); // John
//在这里 user.sayHi() 执行过程中，this 的值是 user

//“this” 不受限制
// 在 JavaScript 中，this 关键字与其他大多数编程语言中的不同。JavaScript 中的 this 可以用于任何函数，即使它不是对象的方法。

//this 的值是在代码运行时计算出来的，它取决于代码上下文。
//
// 例如，这里相同的函数被分配给两个不同的对象，在调用中有着不同的 “this” 值：
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert( this.name );
}

// 在两个对象中使用相同的函数
user.f = sayHi;
admin.f = sayHi;

// 这两个调用有不同的 this 值
// 函数内部的 "this" 是“点符号前面”的那个对象
user.f(); // John（this == user）
admin.f(); // Admin（this == admin）

admin['f'](); // Admin（使用点符号或方括号语法来访问这个方法，都没有关系。）

//在没有对象的情况下调用：this == undefined

//箭头函数没有自己的 “this”

//总结
// 存储在对象属性中的函数被称为“方法”。
// 方法允许对象进行像 object.doSomething() 这样的“操作”。
// 方法可以将对象引用为 this。
// this 的值是在程序运行时得到的。
//
// 一个函数在声明时，可能就使用了 this，但是这个 this 只有在函数被调用时才会有值。
// 可以在对象之间复制函数。
// 以“方法”的语法调用函数时：object.method()，调用过程中的 this 值是 object。
// 请注意箭头函数有些特别：它们没有 this。在箭头函数内部访问到的 this 都是从外部获取的。