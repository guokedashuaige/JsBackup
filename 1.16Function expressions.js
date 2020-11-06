//回调函数
// 让我们多举几个例子，看看如何将函数作为值来传递以及如何使用函数表达式。
//
// 我们写一个包含三个参数的函数 ask(question, yes, no)：
//
// question
// 关于问题的文本
// yes
// 当回答为 “Yes” 时，要运行的脚本
// no
// 当回答为 “No” 时，要运行的脚本
// 函数需要提出 question（问题），并根据用户的回答，调用 yes() 或 no()：
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
//ask 的两个参数值 showOk 和 showCancel 可以被称为 回调函数 或简称 回调。
//
// 主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，showOk 是回答 “yes” 的回调，showCancel 是回答 “no” 的回调。
//
// 我们可以用函数表达式对同样的函数进行大幅简写：
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

//函数表达式 vs 函数声明

// 函数声明 在主代码流中声明为单独的语句的函数
function sum(a, b) {
    return a + b;
}

// 函数表达式 在一个表达式中或另一个语法结构中创建的函数。下面这个函数是在赋值表达式 = 右侧创建的
let sum = function(a, b) {
    return a + b;
};

//什么时候选择函数声明与函数表达式？
// 根据经验，当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。
//
// 这对代码可读性也更好，因为在代码中查找 function f(…) {…} 比 let f = function(…) {…} 更容易。函数声明更“醒目”。

//总结
// 函数是值。它们可以在代码的任何地方被分配，复制或声明。
// 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
// 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
// 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
// 函数表达式在执行流程到达时创建。
// 在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。
//
// 所以，仅当函数声明不适合对应的任务时，才应使用函数表达式。在本章中，我们已经看到了几个例子，以后还会看到更多的例子。