//switch 语句可以替代多个 if 判断。
//
// switch 语句为多分支选择的情况提供了一个更具描述性的方式
//switch 语句有至少一个 case 代码块和一个可选的 default 代码块
// switch(x) {
//     case 'value1':  // if (x === 'value1')
//     ...
//         break
//
//     case 'value2':  // if (x === 'value2')
//     ...
//         break
//
//     default:
//     ...
//         break
// }

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too large' );
        break;
    default:
        alert( "I don't know such values" );
}

//如果没有 break，程序将不经过任何检查就会继续执行下一个 case

//用 switch 重写以下代码
let a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}

if (a == 2 || a == 3) {
    alert( '2,3' );
}

//answer
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//将下面 switch 结构的代码写成 if..else 结构
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}
//为了精确实现 switch 的功能，if 必须使用严格相等 '==='。
//
// 对于给定的字符串，一个简单的 '==' 也可以
if(browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}