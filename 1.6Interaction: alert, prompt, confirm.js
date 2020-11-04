//alert
alert("Hello");
//prompt
// prompt 函数接收两个参数：
result = prompt(title, [fgnb]);
//浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。
//访问者可以在提示输入栏中输入一些内容，然后按“确定”键。然后我们在 result 中获取该文本。或者他们可以按取消键或按 Esc 键取消输入，然后我们得到 null 作为 result。
//
// prompt 将返回用户在 input 框内输入的文本，如果用户取消了输入，则返回 null。
//
// 举个例子：
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

//confirm
//语法：
result = confirm(question);
//confirm 函数显示一个带有 question 以及确定和取消两个按钮的模态窗口。
//
// 点击确定返回 true，点击取消返回 false。

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果“确定”按钮被按下，则显示 true


//总结
// 我们学习了与用户交互的 3 个浏览器的特定函数：
//
// alert
// 显示信息。
// prompt
// 显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 null。
// confirm
// 显示信息等待用户点击确定或取消。点击确定返回 true，点击取消或按下 Esc 键返回 false。
// 这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。
//
// 上述所有方法共有两个限制：
//
// 模态窗口的确切位置由浏览器决定。通常在页面中心。
// 窗口的确切外观也取决于浏览器。我们不能修改它。
