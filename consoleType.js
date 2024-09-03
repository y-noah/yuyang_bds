// 1. console.log()
// console.log() 是最常用的调试方法，用于在控制台输出一般信息。
console.log("Hello, World!"); // 输出: Hello, World!
let number = 42;
console.log("The number is:", number); // 输出: The number is: 42


// 2. console.error()
// console.error() 用于输出错误信息，通常会在控制台中以红色显示，帮助识别错误。
console.error("This is an error message."); // 输出: This is an error message.
try {
	throw new Error("Something went wrong!");
} catch (error) {
	console.error("Caught an error:", error.message); // 输出: Caught an error: Something went wrong!
}


// 3. console.warn()
// console.warn() 用于输出警告信息，通常会在控制台中以黄色显示。
console.warn("This is a warning!"); // 输出: This is a warning!


// 4. console.info()
// console.info() 用于输出信息，与 console.log() 类似，但有时在不同环境中会有不同的格式。
console.info("This is an informational message."); // 输出: This is an informational message.



// 5. console.table()
// console.table() 用于将数据以表格形式展示，非常适合查看数组或对象的内容。
let people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 }
];
console.table(people);
// 输出:
// ┌─────────┬──────────┬─────┐
// │ (index) │   name   │ age │
// ├─────────┼──────────┼─────┤
/* │    0    │ 'Alice'  │ 25  │
 │    1    │  'Bob'   │ 30  │
 │    2    │ 'Charlie' │ 35  │*/
// └─────────┴──────────┴─────┘



// 6. console.dir()
// console.dir() 用于显示一个对象的属性列表，通常比 console.log() 更详细。
let person = {
	name: "Alice",
	age: 25,
	greet: function() {
		console.log("Hello!");
	}
};
console.dir(person);
// 输出: { name: "Alice", age: 25, greet: [Function: greet] }



// 7. console.group() 和 console.groupEnd()
// console.group() 和 console.groupEnd() 用于将相关的输出信息分组，方便组织日志信息。
console.group("User Details");
console.log("Name: Alice");
console.log("Age: 25");
console.group("Address");
console.log("Street: 123 Main St");
console.log("City: Springfield");
console.groupEnd();
console.groupEnd();



// 8. console.time() 和 console.timeEnd()
// console.time() 和 console.timeEnd() 用于测量一段代码的执行时间。
console.time("Array Initialization");
let arr = [];
for (let i = 0; i < 1000000; i++) {
	arr.push(i);
}
console.timeEnd("Array Initialization"); // 输出: Array Initialization: 25ms (实际时间视执行环境而定)



// 9. console.assert()
// console.assert() 用于在表达式为 false 时输出错误信息，否则不会有任何输出。
console.assert(1 === 2, "This will be shown because the assertion failed."); // 输出: Assertion failed: This will be shown because the assertion failed.
console.assert(1 === 1, "This will not be shown."); // 没有输出



// 10. console.clear()
// console.clear() 用于清空控制台。部分浏览器可能会提示控制台已被清除。
console.clear(); // 控制台内容被清空