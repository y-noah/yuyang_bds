//1. 字符串与数字之间的转换
//使用 Number() 函数
let str1 = "123";
let num1 = Number(str1); // 123
console.log(num1); // 输出: 123
console.log(typeof num1); // 输出: "number"

//使用 parseInt() 或 parseFloat()
let str2 = "123.45";
let intNum = parseInt(str2);    // 123
let floatNum = parseFloat(str2); // 123.45
console.log(intNum); // 输出: 123
console.log(floatNum); // 输出: 123.45

//使用一元加号运算符 (+)
let str3 = "678";
let num2 = +str3; // 678
console.log(num2); // 输出: 678
console.log(typeof num2); // 输出: "number"


//使用 String() 函数
let num3 = 456;
let str4 = String(num3); // "456"
console.log(str4); // 输出: "456"
console.log(typeof str4); // 输出: "string"

//使用 toString() 方法
let num4 = 789;
let str5 = num4.toString(); // "789"
console.log(str5); // 输出: "789"
console.log(typeof str5); // 输出: "string"

//使用模板字面量
let num5 = 1011;
let str6 = `${num5}`; // "1011"
console.log(str6); // 输出: "1011"
console.log(typeof str6); // 输出: "string"



//2. 字符串与布尔值之间的转换
//字符串转布尔值
//在 JavaScript 中，除了空字符串 ("") 被转换为 false，其他所有字符串都被转换为 true。
let str1 = "hello";
let bool1 = Boolean(str1); // true
let str2 = "";
let bool2 = Boolean(str2); // false
console.log(bool1); // 输出: true
console.log(bool2); // 输出: false

//布尔值转字符串
let bool3 = true;
let str3 = String(bool3); // "true"
let bool4 = false;
let str4 = bool4.toString(); // "false"
console.log(str3); // 输出: "true"
console.log(str4); // 输出: "false"




//3. 数字与布尔值之间的转换
//数字转布尔值
let num1 = 0;
let bool1 = Boolean(num1); // false
let num2 = 42;
let bool2 = Boolean(num2); // true
console.log(bool1); // 输出: false
console.log(bool2); // 输出: true

//布尔值转数字
let bool3 = false;
let num3 = Number(bool3); // 0

let bool4 = true;
let num4 = +bool4; // 1

console.log(num3); // 输出: 0
console.log(num4); // 输出: 1




//4. 其他类型之间的转换
//对象与原始类型之间的转换
//JavaScript 在需要时会自动调用对象的 toString() 或 valueOf() 方法来进行类型转换。
let obj = {
	value: 100,
	toString: function() {
		return `Value is ${this.value}`;
	},
	valueOf: function() {
		return this.value;
	}
};
// 对象转字符串
let str = String(obj); // "Value is 100"
console.log(str); // 输出: "Value is 100"
// 对象转数字
let num = Number(obj); // 100
console.log(num); // 输出: 100

/*null 和 undefined 的转换
null 转换为数字： 0
undefined 转换为数字： NaN
null 转换为布尔值： false
undefined 转换为布尔值： false*/
let val1 = null;
let num1 = Number(val1); // 0
let bool1 = Boolean(val1); // false
let val2 = undefined;
let num2 = Number(val2); // NaN
let bool2 = Boolean(val2); // false
console.log(num1, bool1); // 输出: 0 false
console.log(num2, bool2); // 输出: NaN false





//5. 自动类型转换（隐式转换）
let a = "5";
let b = 3;
let result = a - b; // 2，因为 "5" 被转换为数字 5
console.log(result); // 输出: 2
let result2 = a + b; // "53"，因为数字 3 被转换为字符串 "3"
console.log(result2); // 输出: "53"

let c = "hello";
if (c) {
	console.log("c 是真值"); // 这行会被执行，因为 "hello" 是真值
}
let d = 0;
if (!d) {
	console.log("d 是假值"); // 这行会被执行，因为 0 是假值
}


















