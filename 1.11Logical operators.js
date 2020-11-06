//JavaScript 里有三个逻辑运算符：||（或），&&（与），!（非）。
//
// 虽然它们被称为“逻辑”运算符，但这些运算符却可以被应用于任意类型的值，而不仅仅是布尔值。它们的结果也同样可以是任意类型。
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
//如果操作数不是布尔值，那么它将会被转化为布尔值来参与运算。
//
// 例如，数字 1 将会被作为 true，数字 0 则作为 false
if (1 || 0) { // 工作原理相当于 if( true || false )
    alert( 'truthy!' );
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' ); // 是周末
}
//或运算寻找第一个真值
result = value1 || value2 || value3;
//或运算符 || 做了如下的事情：
//
// 从左到右依次计算操作数。
// 处理每一个操作数时，都将其转化为布尔值。如果结果是 true，就停止计算，返回这个操作数的初始值。
// 如果所有的操作数都被计算过（也就是，转换结果都是 false），则返回最后一个操作数
//返回的值是操作数的初始形式，不会做布尔转换。
// 也就是，一个或运算 "||" 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

alert( 1 || 0 ); // 1（1 是真值）

alert( null || 1 ); // 1（1 是第一个真值）
alert( null || 0 || 1 ); // 1（第一个真值）

alert( undefined || null || 0 ); // 0（所有的转化结果都是 false，返回最后一个值）

//&&（与）
result = a && b;
//传统的编程中，当两个操作数都是真值，与操作返回 true，否则返回 false：
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//与操作寻找第一个假值
result = value1 && value2 && value3;
//从左到右依次计算操作数。
// 将处理每一个操作数时，都将其转化为布尔值。如果结果是 false，就停止计算，并返回这个操作数的初始值。
// 如果所有的操作数都被计算过（也就是，转换结果都是 true），则返回最后一个操作数。
// 换句话说，与运算符返回第一个假值，如果没有假值就返回最后一个值。
//
// 上面的规则和或运算很像。区别就是与运算返回第一个假值而或操作返回第一个真值

// 如果第一个运算符是真值，
// 与操作返回第二个操作数：
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 如果第一个运算符是假值，
// 与操作直接返回它。第二个操作数被忽略
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// 运算 && 在或运算符 || 之前执行
// 与运算 && 的优先级比或运算 || 要高。
//
// 所以代码 a && b || c && d 完全跟 && 表达式加了括号一样：(a && b) || (c && d)


//!（非）
// 感叹符号 ! 表示布尔非运算。
//两个非运算 !! 有时候用来将某个值转化为布尔类型：
alert( !!"non-empty string" ); // true
alert( !!null ); // false
//有更多详细的方法可以完成同样的事 —— 一个内置的 Boolean 函数
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
//下面的代码将会输出什么？
alert( alert(1) || 2 || alert(3) );

//答案：首先是 1，然后是 2。
//对 alert 的调用没有返回值。或者说返回的是 undefined。
//
// 第一个或运算 || 对它的左值 alert(1) 进行了计算。这就显示了第一条信息 1。
// 函数 alert 返回了 undefined，所以或运算继续检查第二个操作数以寻找真值。
// 第二个操作数 2 是真值，所以执行就中断了。2 被返回，并且被外层的 alert 显示。
// 这里不会显示 3，因为运算没有抵达 alert(3)。

//这段代码将会显示什么？
alert( alert(1) && alert(2) );
///答案：1，然后 undefined。
//调用 alert 返回了 undefined（它只展示消息，所以没有有意义的返回值）。
//
// 因此，&& 计算了它左边的操作数（显示 1），然后立即停止了，因为 undefined 是一个假值。&& 就是寻找假值然后返回它，所以运算结束。

//下面哪一个 alert 将会被执行？
//
// if(...) 语句内表达式的结果是什么？
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//答案：第一个和第三个将会被执行。
// 执行。
// -1 || 0 的结果为 -1，真值
if (-1 || 0) alert( 'first' );

// 不执行。
// -1 && 0 = 0，假值
if (-1 && 0) alert( 'second' );

// 执行
// && 运算的优先级比 || 高
// 所以 -1 && 1 先执行，给出如下运算链：
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


//登陆验证
//实现使用 prompt 进行登陆校验的代码。
//
// 如果访问者输入 "Admin"，那么使用 prompt 引导获取密码，如果输入的用户名为空或者按下了 Esc 键 —— 显示 “Canceled”，如果是其他字符串 —— 显示 “I don’t know you”。
//
// 密码的校验规则如下：
//
// 如果输入的是 “TheMaster”，显示 “Welcome!”，
// 其他字符串 —— 显示 “Wrong password”，
// 空字符串或取消了输入，显示 “Canceled.”
let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

    let pass = prompt('Password?', '');

    if (pass == 'TheMaster') {
        alert( 'Welcome!' );
    } else if (pass == '' || pass == null) {
        alert( 'Canceled' );
    } else {
        alert( 'Wrong password' );
    }

} else if (userName == '' || userName == null) {
    alert( 'Canceled' );
} else {
    alert( "I don't know you" );
}