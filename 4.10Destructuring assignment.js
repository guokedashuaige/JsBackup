//解构赋值
// JavaScript 中最常用的两种数据结构是 Object 和 Array。
//
// 对象让我们能够创建通过键来存储数据项的单个实体，数组则让我们能够将数据收集到一个有序的集合中。
//
// 但是，当我们把它们传递给函数时，它可能不需要一个整体的对象/数组，而是需要单个块。
//
// 解构赋值 是一种特殊的语法，它使我们可以将数组或对象“拆包”为到一系列变量中，因为有时候使用变量更加方便。解构操作对那些具有很多参数和默认值等的函数也很奏效。
// 我们有一个存放了名字和姓氏的数组
let arr = ["Ilya", "Kantor"]

// 解构赋值
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor
//现在我们就可以针对这些变量进行操作，而不是针对原来的数组元素。
//
// 当与 split 函数（或其他返回值是数组的函数）结合使用时，看起来就更优雅了：
let [firstName, surname] = "Ilya Kantor".split(' ');


// 忽略使用逗号的元素
// 数组中不想要的元素也可以通过添加额外的逗号来把它丢弃：

// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
//在上面的代码中，数组的第二个元素被跳过了，第三个元素被赋值给了 title 变量，数组中剩下的元素也都被跳过了（因为在这没有对应给它们的变量）。

//等号右侧可以是任何可迭代对象
// ……实际上，我们可以将其与任何可迭代对象一起使用，而不仅限于数组：
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

//赋值给等号左侧的任何内容
// 我们可以在等号左侧使用任何“可以被赋值的”东西。
//
// 例如，一个对象的属性：
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya

//与 .entries() 方法进行循环操作
// 在前面的章节中我们已经见过了 Object.entries(obj) 方法。
//
// 我们可以将 .entries() 方法与解构语法一同使用，来遍历一个对象的“键—值”对：
let user = {
    name: "John",
    age: 30
};

// 循环遍历键—值对
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
}

//……对于 map 对象也类似：
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
}

//交换变量值的技巧
// 一个用于交换变量值的典型技巧：
let guest = "Jane";
let admin = "Pete";

// 交换值：让 guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane（成功交换！）


//剩余的 ‘…’
// 如果我们不只是要获得第一个值，还要将后续的所有元素都收集起来 — 我们可以使用三个点 "..." 来再加一个参数来接收“剩余的”元素：
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// 请注意，`rest` 的类型是数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

//默认值
// 如果赋值语句中，变量的数量多于数组中实际元素的数量，赋值不会报错。未赋值的变量被认为是 undefined：
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined

//如果我们想要一个“默认”值给未赋值的变量，我们可以使用 = 来提供：
// 默认值
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius（来自数组的值）
alert(surname); // Anonymous（默认值被使用了）


//对象解构
// 解构赋值同样适用于对象
//let {var1, var2} = {var1:…, var2:…}
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
//如果我们想把一个属性赋值给另一个名字的变量，比如把 options.width 属性赋值给变量 w，那么我们可以使用冒号来指定：
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
//对于可能缺失的属性，我们可以使用 "=" 设置默认值，如下所示：
let options = {
    title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
//如果我们有一个具有很多属性的复杂对象，那么我们可以只提取所需的内容：
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// 仅提取 title 作为变量
let { title } = options;

alert(title); // Menu

//剩余模式（pattern）"…"
// 如果对象拥有的属性数量比我们提供的变量数量还多，该怎么办？我们可以只取其中的某一些属性，然后把“剩余的”赋值到其他地方吗？
//
// 我们可以使用剩余模式（pattern），就像我们对数组那样。一些较旧的浏览器不支持此功能（例如，使用 Babel 对其进行填充），但可以在现代浏览器中使用
let options = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let {title, ...rest} = options;

// 现在 title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100


//总结
// 解构赋值可以立即将一个对象或数组映射到多个变量上。
//
// 解构对象的完整语法：
//
// let {prop : varName = default, ...rest} = object
// 这表示属性 prop 会被赋值给变量 varName，如果没有这个属性的话，就会使用默认值 default。
//
// 没有对应映射的对象属性会被复制到 rest 对象。
//
// 解构数组的完整语法：
//
// let [item1 = default, item2, ...rest] = array
// 数组的第一个元素被赋值给 item1，第二个元素被赋值给 item2，剩下的所有元素被复制到另一个数组 rest。
//
// 从嵌套数组/对象中提取数据也是可以的，此时等号左侧必须和等号右侧有相同的结构。



//最高薪资
//这儿有一个 salaries 对象：
//
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// 新建一个函数 topSalary(salaries)，返回收入最高的人的姓名。
//
// 如果 salaries 是空的，函数应该返回 null。
// 如果有多个收入最高的人，返回其中任意一个即可。
// P.S. 使用 Object.entries 和解构语法来遍历键/值对
function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}