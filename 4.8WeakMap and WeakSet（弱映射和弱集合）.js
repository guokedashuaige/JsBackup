//从前面的 垃圾回收 章节中知道，JavaScript 引擎在值可访问（并可能被使用）时将其存储在内存中
//let john = { name: "John" };
//
// // 该对象能被访问，john 是它的引用
//
// // 覆盖引用
// john = null;
//
// // 该对象将会被从内存中清除
//当对象、数组这类数据结构在内存中时，它们的子元素，如对象的属性、数组的元素都是可以访问的。
//
// 例如，如果把一个对象放入到数组中，那么只要这个数组存在，那么这个对象也就存在，即使没有其他对该对象的引用。
let john = { name: "John" };

let array = [ john ];

john = null; // 覆盖引用

// john 被存储在数组里, 所以它不会被垃圾回收机制回收
// 我们可以通过 array[0] 来获取它
//类似的，如果我们使用对象作为常规 Map 的键，那么当 Map 存在时，该对象也将存在。它会占用内存，并且应该不会被（垃圾回收机制）回收
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // 覆盖引用

// john 被存储在 map 中，
// 我们可以使用 map.keys() 来获取它



//WeakMap 在这方面有着根本上的不同。它不会阻止垃圾回收机制对作为键的对象（key object）的回收
//WeakMap
// WeakMap 和 Map 的第一个不同点就是，WeakMap 的键必须是对象，不能是原始值：
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // 正常工作（以对象作为键）

// 不能使用字符串作为键
weakMap.set("test", "Whoops"); // Error，因为 "test" 不是一个对象
//现在，如果我们在 weakMap 中使用一个对象作为键，并且没有其他对这个对象的引用 —— 该对象将会被从内存（和map）中自动清除。
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 覆盖引用

// john 被从内存中删除了！
//与上面常规的 Map 的例子相比，现在如果 john 仅仅是作为 WeakMap 的键而存在 —— 它将会被从 map（和内存）中自动删除。
//
// WeakMap 不支持迭代以及 keys()，values() 和 entries() 方法。所以没有办法获取 WeakMap 的所有键或值。
//
// WeakMap 只有以下的方法：
//
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)



//WeakMap 的主要应用场景是 额外数据的存储。
//
// 假如我们正在处理一个“属于”另一个代码的一个对象，也可能是第三方库，并想存储一些与之相关的数据，那么这些数据就应该与这个对象共存亡 —— 这时候 WeakMap 正是我们所需要的利器。


//使用案例：缓存
// 另外一个普遍的例子是缓存：当一个函数的结果需要被记住（“缓存”），这样在后续的对同一个对象的调用时，就可以重用这个被缓存的结果。
//
// 我们可以使用 Map 来存储结果，就像这样：
//
// // 📁 cache.js
// let cache = new Map();
//
// // 计算并记住结果
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculations of the result for */ obj;
//
//     cache.set(obj, result);
//   }
//
//   return cache.get(obj);
// }
//
// // 现在我们在其它文件中使用 process()
//
// // 📁 main.js
// let obj = {/* 假设我们有个对象 */};
//
// let result1 = process(obj); // 计算完成
//
// // ……稍后，来自代码的另外一个地方……
// let result2 = process(obj); // 取自缓存的被记忆的结果
//
// // ……稍后，我们不再需要这个对象时：
// obj = null;
//
// alert(cache.size); // 1（啊！该对象依然在 cache 中，并占据着内存！）
// 对于多次调用同一个对象，它只需在第一次调用时计算出结果，之后的调用可以直接从 cache 中获取。这样做的缺点是，当我们不再需要这个对象的时候需要清理 cache。
//
// 如果我们用 WeakMap 替代 Map，这个问题便会消失：当对象被垃圾回收时，对应的缓存的结果也会被自动地从内存中清除。
//
// // 📁 cache.js
// let cache = new WeakMap();
//
// // 计算并记结果
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* calculate the result for */ obj;
//
//     cache.set(obj, result);
//   }
//
//   return cache.get(obj);
// }
//
// // 📁 main.js
// let obj = {/* some object */};
//
// let result1 = process(obj);
// let result2 = process(obj);
//
// // ……稍后，我们不再需要这个对象时：
// obj = null;
//
// // 无法获取 cache.size，因为它是一个 WeakMap，
// // 要么是 0，或即将变为 0
// // 当 obj 被垃圾回收，缓存的数据也会被清除

//WeakSet
// WeakSet 的表现类似：
//
// 与 Set 类似，但是我们只能向 WeakSet 添加对象（而不能是原始值）。
// 对象只有在其它某个（些）地方能被访问的时候，才能留在 set 中。
// 跟 Set 一样，WeakSet 支持 add，has 和 delete 方法，但不支持 size 和 keys()，并且不可迭代。


//总结
// WeakMap 是类似于 Map 的集合，它仅允许对象作为键，并且一旦通过其他方式无法访问它们，便会将它们与其关联值一同删除。
//
// WeakSet 是类似于 Set 的集合，它仅存储对象，并且一旦通过其他方式无法访问它们，便会将其删除。
//
// 它们都不支持引用所有键或其计数的方法和属性。仅允许单个操作。
//
// WeakMap 和 WeakSet 被用作“主要”对象存储之外的“辅助”数据结构。一旦将对象从主存储器中删除，如果该对象仅被用作 WeakMap 或 WeakSet 的键，那么它将被自动清除。