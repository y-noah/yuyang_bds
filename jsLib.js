// 1. Object 对象
// Object 是 JavaScript 中所有对象的基类，提供了一系列处理对象的方法。
let person = {
	name: "Alice",
	age: 25,
	greet: function() {
		console.log("Hello, " + this.name);
	}
};
console.log(person.name); // 输出: Alice
person.greet(); // 输出: Hello, Alice
let keys = Object.keys(person); // ["name", "age", "greet"]
let values = Object.values(person); // ["Alice", 25, function() {...}]
console.log(keys); // 输出: ["name", "age", "greet"]
console.log(values); // 输出: ["Alice", 25, function() {...}]



// 2. 属性描述对象
// 属性描述对象用于定义或修改对象属性的特性（可枚举性、可写性、可配置性）。
let obj = {};
Object.defineProperty(obj, "name", {
	value: "Bob",
	writable: false, // 不可修改
	enumerable: true, // 可枚举
	configurable: false // 不可重新定义
});
console.log(obj.name); // 输出: Bob
obj.name = "Alice"; // 修改无效
console.log(obj.name); // 仍然输出: Bob
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
// 输出: { value: "Bob", writable: false, enumerable: true, configurable: false }



// 3. Array 对象
// Array 对象用于存储有序的数据列表，提供了多种方法操作数组。
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // 输出: Apple
fruits.push("Durian"); // 添加元素到数组末尾
console.log(fruits); // 输出: ["Apple", "Banana", "Cherry", "Durian"]
let first = fruits.shift(); // 移除第一个元素
console.log(first); // 输出: Apple
console.log(fruits); // 输出: ["Banana", "Cherry", "Durian"]
let sortedFruits = fruits.sort(); // 排序数组
console.log(sortedFruits); // 输出: ["Banana", "Cherry", "Durian"]



// 4. 包装对象
// 包装对象包括 Boolean、Number 和 String，它们将原始数据类型转换为对象，以便可以使用相应的方法。
let isTrue = new Boolean(true);
console.log(isTrue.valueOf()); // 输出: true
let num = new Number(42);
console.log(num.toFixed(2)); // 输出: "42.00"
let str = new String("hello");
console.log(str.toUpperCase()); // 输出: "HELLO"



// 5. Math 对象
// Math 对象用于执行数学计算，不是构造函数。
let pi = Math.PI;
console.log(pi); // 输出: 3.141592653589793
let random = Math.random();
console.log(random); // 输出: 0 到 1 之间的随机数
let sqrt = Math.sqrt(16);
console.log(sqrt); // 输出: 4



// 6. Date 对象
// Date 对象用于处理日期和时间。
let now = new Date();
console.log(now); // 输出当前日期和时间
let specificDate = new Date(2024, 8, 3);
console.log(specificDate); // 输出: Wed Sep 03 2024 00:00:00 GMT+0000
let year = now.getFullYear();
console.log(year); // 输出: 当前年份
let hours = now.getHours();
console.log(hours); // 输出: 当前小时数



// 7. RegExp 对象
// RegExp 对象用于在字符串中执行模式匹配。
let regex = /hello/i; // i 表示忽略大小写
let result = regex.test("Hello World");
console.log(result); // 输出: true
let str = "The quick brown fox jumps over the lazy dog.";
let matches = str.match(/the/gi);
console.log(matches); // 输出: ["The", "the"]



// 8. JSON 对象
// JSON 对象用于解析和序列化 JSON 数据。
let obj = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(obj);
console.log(jsonString); // 输出: '{"name":"Alice","age":25}'
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // 输出: Alice