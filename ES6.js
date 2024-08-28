// 1、解构赋值
let [a, b, c] = [1, 2, 3];
console.log(a); // 输出 1
console.log(b); // 输出 2
console.log(c); // 输出 3

let [x, y, z = 5] = [10, 20];
console.log(z); // 输出 5

// 从对象中提取值
let person = { name: 'John', age: 30 };
let { name, age } = person;
console.log(name); // 输出 "John"
console.log(age);  // 输出 30

// 也可以重命名变量
let { name: firstName, age: years } = person;
console.log(firstName); // 输出 "John"
console.log(years);     // 输出 30

// 嵌套对象的解构赋值
let user = {
	id: 42,
	info: {
		fullName: 'Alice',
		location: 'Paris'
	}
};
let { id, info: { fullName, location } } = user;
console.log(id);       // 输出 42
console.log(fullName); // 输出 "Alice"
console.log(location); // 输出 "Paris"




// 2、let 关键字
// let 关键字用于声明一个块作用域的变量。与 var 不同的是，let 声明的变量不会提升到所在作用域的顶部，而且只在块级作用域内有效。
if (true) {
	let message = 'Hello';
	console.log(message); // 输出 "Hello"
}
// console.log(message); // 报错：message is not defined

// 使用 let 在循环中声明变量
for (let i = 0; i < 3; i++) {
	console.log(i); // 输出 0, 1, 2
}
// console.log(i); // 报错：i is not defined



// 3、ES6 字符串新增方法
let str = 'Hello, World!';
console.log(str.includes('World')); // 输出 true
console.log(str.includes('world')); // 输出 false
let str = 'JavaScript is awesome!';
console.log(str.startsWith('Java')); // 输出 true
console.log(str.endsWith('awesome!')); // 输出 true
let str = 'Ha';
console.log(str.repeat(3)); // 输出 "HaHaHa"
let str = '5';
console.log(str.padStart(3, '0')); // 输出 "005"
console.log(str.padEnd(3, '0'));   // 输出 "500"



// 4、Set 和 Map 数据结构
let mySet = new Set();

// 添加元素
mySet.add(1);
mySet.add(2);
mySet.add(2); // 重复的值不会添加

console.log(mySet); // 输出 Set { 1, 2 }

// 判断元素是否存在
console.log(mySet.has(1)); // 输出 true
console.log(mySet.has(3)); // 输出 false

// 删除元素
mySet.delete(2);
console.log(mySet); // 输出 Set { 1 }

// 获取 Set 的大小
console.log(mySet.size); // 输出 1

// 遍历 Set
mySet.add(3);
mySet.add(4);
for (let item of mySet) {
	console.log(item); // 输出 1, 3, 4
}

let myMap = new Map();

// 添加键值对
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(1, 'one');

console.log(myMap); // 输出 Map { 'name' => 'Alice', 'age' => 25, 1 => 'one' }

// 获取值
console.log(myMap.get('name')); // 输出 "Alice"
console.log(myMap.get(1));      // 输出 "one"

// 判断键是否存在
console.log(myMap.has('age')); // 输出 true
console.log(myMap.has('gender')); // 输出 false

// 删除键值对
myMap.delete('age');
console.log(myMap); // 输出 Map { 'name' => 'Alice', 1 => 'one' }

// 获取 Map 的大小
console.log(myMap.size); // 输出 2

// 遍历 Map
myMap.set('gender', 'female');
for (let [key, value] of myMap) {
	console.log(`${key}: ${value}`);
	// 输出 "name: Alice"
	// 输出 "1: one"
	// 输出 "gender: female"
}




