// 1、原始类型
// number
let num = 42;
console.log(num); // 输出 42

// string
let str = "Hello, World!";
console.log(str); // 输出 "Hello, World!"

// boolean
let isTrue = true;
console.log(isTrue); // 输出 true

// null
let empty = null;
console.log(empty); // 输出 null

// undefined
let notDefined;
console.log(notDefined); // 输出 undefined

// symbol
let sym = Symbol('unique');
console.log(sym); // 输出 Symbol(unique)

// bigint
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 输出 1234567890123456789012345678901234567890n








// 2、引用类型
// object
let person = {
	name: "Alice",
	age: 30
};
console.log(person); // 输出 { name: 'Alice', age: 30 }

// array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // 输出 [1, 2, 3, 4, 5]

// function
function greet(name) {
	return `Hello, ${name}!`;
}
console.log(greet("Bob")); // 输出 "Hello, Bob!"

// date
let today = new Date();
console.log(today); // 输出当前日期和时间，例如 2024-08-27T07:00:00.000Z

// regexp
let regex = /hello/i; // 'i' 标志表示忽略大小写
console.log(regex.test("Hello, World!")); // 输出 true






// 3、typeof 检测类型

console.log(typeof 42);             // 输出 "number"
console.log(typeof "Hello");        // 输出 "string"
console.log(typeof true);           // 输出 "boolean"
console.log(typeof null);           // 输出 "object"（这是 JavaScript 中的一个特殊情况）
console.log(typeof undefined);      // 输出 "undefined"
console.log(typeof Symbol('id'));   // 输出 "symbol"
console.log(typeof 123n);           // 输出 "bigint"

console.log(typeof { name: "Alice" }); // 输出 "object"
console.log(typeof [1, 2, 3]);          // 输出 "object"（数组也是对象）
console.log(typeof function() {});      // 输出 "function"
console.log(typeof new Date());         // 输出 "object"
console.log(typeof /abc/);              // 输出 "object"（正则表达式也是对象）
