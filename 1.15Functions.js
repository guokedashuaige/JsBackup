function showMessage() {
    alert( 'Hello everyone!' );
}

showMessage();
showMessage();

//局部变量
// 在函数中声明的变量只在该函数内部可见。
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // 局部变量

    alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- 错误！变量是函数的局部变量

//外部变量
// 函数也可以访问外部变量，例如：
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage(); // Hello, John
//函数对外部变量拥有全部的访问权限。函数也可以修改外部变量
let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) 改变外部变量

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName ); // John 在函数调用之前

showMessage();

alert( userName ); // Bob，值被函数修改了


//只有在没有局部变量的情况下才会使用外部变量。
//
// 如果在函数内部声明了同名变量，那么函数会 遮蔽 外部变量。例如，在下面的代码中，函数使用局部的 userName，而外部变量被忽略：
let userName = 'John';

function showMessage() {
    let userName = "Bob"; // 声明一个局部变量

    let message = 'Hello, ' + userName; // Bob
    alert(message);
}

// 函数会创建并使用它自己的 userName
showMessage();

alert( userName ); // John，未被更改，函数没有访问外部变量


//我们可以使用参数（也称“函数参数”）来将任意数据传递给函数

function showMessage(from, text) { // 参数：from 和 text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
//当函数在 (*) 和 (**) 行中被调用时，给定值被复制到了局部变量 from 和 text。然后函数使用它们进行计算。

//这里还有一个例子：我们有一个变量 from，并将它传递给函数。请注意：函数会修改 from，但在函数外部看不到更改，因为函数修改的是复制的变量值副本
function showMessage(from, text) {

    from = '*' + from + '*'; // 让 "from" 看起来更优雅

    alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// "from" 值相同，函数修改了一个局部的副本。
alert( from ); // Ann



//默认值
// 如果未提供参数，那么其默认值则是 undefined
function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
//现在如果 text 参数未被传递，它将会得到值 "no text given"
//这里 "no text given" 是一个字符串，但它可以是更复杂的表达式，并且只会在缺少参数时才会被计算和分配。所以，这也是可能的：
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() 仅在没有给定 text 时执行
    // 其运行结果将成为 text 的值
}

//后备的默认参数
// 有些时候，将参数默认值的设置放在函数执行（相较更后期）而不是函数声明的时候，也能行得通
//为了判断参数是否被省略掉，我们可以拿它跟 undefined 做比较
function showMessage(text) {
    if (text === undefined) {
        text = 'empty message';
    }

    alert(text);
}

showMessage(); // empty message

//或者我们可以使用 || 运算符：
// 如果 "text" 参数被省略或者被传入空字符串，则赋值为 'empty'
function showMessage(text) {
    text = text || 'empty';

}

//函数可以将一个值返回到调用代码中作为结果
//最简单的例子是将两个值相加的函数
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
//指令 return 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述代码中的 result）
//在一个函数中可能会出现很多次 return
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Got a permission from the parents?');
    }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}

//只使用 return 但没有返回值也是可行的。但这会导致函数立即退出
function showMovie(age) {
    if ( !checkAge(age) ) {
        return;
    }

    alert( "Showing you the movie" ); // (*)
    // ...
}

//空值的 return 或没有 return 的函数返回值为 undefined
function doNothing() { /* 没有代码 */ }

alert( doNothing() === undefined ); // true

//不要在 return 与返回值之间添加新行
//如果我们想要将返回的表达式写成跨多行的形式，那么应该在 return 的同一行开始写此表达式。或者至少按照如下的方式放上左括号：
//return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )


//总结
// 函数声明方式如下所示：
//
// function name(parameters, delimited, by, comma) {
//   /* code */
// }
// 作为参数传递给函数的值，会被复制到函数的局部变量。
// 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
// 函数可以返回值。如果没有返回值，则其返回的结果是 undefined。
// 为了使代码简洁易懂，建议在函数中主要使用局部变量和参数，而不是外部变量。
//
// 与不获取参数但将修改外部变量作为副作用的函数相比，获取参数、使用参数并返回结果的函数更容易理解。
//
// 函数命名：
//
// 函数名应该清楚地描述函数的功能。当我们在代码中看到一个函数调用时，一个好的函数名能够让我们马上知道这个函数的功能是什么，会返回什么。
// 一个函数是一个行为，所以函数名通常是动词。
// 目前有许多优秀的函数名前缀，如 create…、show…、get…、check… 等等。使用它们来提示函数的作用吧。
// 函数是脚本的主要构建块。现在我们已经介绍了基本知识，现在我们就可以开始创建和使用函数了。但这只是学习和使用函数的开始。我们将继续学习更多函数的相关知识，更深入地研究它们的先进特征。