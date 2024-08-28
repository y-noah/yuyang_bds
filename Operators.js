// 1、算术运算符
let a = 10;
let b = 3;

console.log(a + b); // 输出 13
console.log(a - b); // 输出 7
console.log(a * b); // 输出 30
console.log(a / b); // 输出 3.3333333333333335
console.log(a % b); // 输出 1
console.log(a ** b); // 输出 1000（10 的 3 次方）

// 自增和自减
let x = 5;
console.log(x++); // 输出 5 (x 先输出再加 1)
console.log(x);   // 输出 6
console.log(--x); // 输出 5 (x 先减 1 再输出)




// 2、赋值运算符
let a = 10;

a += 5; // 等同于 a = a + 5
console.log(a); // 输出 15

a *= 2; // 等同于 a = a * 2
console.log(a); // 输出 30

a **= 2; // 等同于 a = a ** 2
console.log(a); // 输出 900






// 3、比较运算符
let a = 10;
let b = "10";

console.log(a == b);  // 输出 true（值相等，类型忽略）
console.log(a === b); // 输出 false（类型不同）
console.log(a != b);  // 输出 false（值相等）
console.log(a !== b); // 输出 true（类型不同）

console.log(a > 5);   // 输出 true
console.log(a <= 10); // 输出 true







// 4、逻辑运算符
let a = true;
let b = false;

console.log(a && b); // 输出 false
console.log(a || b); // 输出 true
console.log(!a);     // 输出 false





// 5、位运算符
let a = 5;  // 二进制表示 0101
let b = 3;  // 二进制表示 0011

console.log(a & b); // 输出 1（0101 & 0011 = 0001）
console.log(a | b); // 输出 7（0101 | 0011 = 0111）
console.log(a ^ b); // 输出 6（0101 ^ 0011 = 0110）
console.log(~a);    // 输出 -6（~0101 = 1010 + 1 = -0110）
console.log(a << 1); // 输出 10（0101 左移 1 位 = 1010）
console.log(a >> 1); // 输出 2（0101 右移 1 位 = 0010）




// 6、字符串运算符
let str1 = "Hello, ";
let str2 = "World!";

let result = str1 + str2;
console.log(result); // 输出 "Hello, World!"

str1 += "JavaScript!";
console.log(str1); // 输出 "Hello, JavaScript!"





// 7、三元运算符
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you can't vote.";
console.log(canVote); // 输出 "Yes, you can vote."






// 8、类型运算符
// typeof
let num = 42;
console.log(typeof num); // 输出 "number"

let str = "Hello";
console.log(typeof str); // 输出 "string"

// instanceof
let date = new Date();
console.log(date instanceof Date); // 输出 true
console.log(date instanceof Object); // 输出 true
