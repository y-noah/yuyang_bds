// 1. 定义类
// 在 ES6 中，使用 class 关键字定义类。类可以包含构造函数、属性和方法。
class Person {
	constructor(name, age) {
		this.name = name; // 属性
		this.age = age;
	}

	greet() { // 方法
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}

let person1 = new Person("Alice", 25); // 创建类的实例
person1.greet(); // 输出: Hello, my name is Alice and I am 25 years old.



// 2. 继承
// 继承是面向对象编程中的重要概念，允许一个类继承另一个类的属性和方法。使用 extends 关键字实现继承。
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a sound.`);
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name); // 调用父类的构造函数
		this.breed = breed;
	}

	speak() { // 方法重写
		console.log(`${this.name} barks.`);
	}
}

let dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // 输出: Buddy barks.



// 3. 封装
// 封装通过将对象的状态（属性）保存在类中，并通过方法控制对这些属性的访问，从而保护对象的内部状态。
class BankAccount {
	#balance; // 使用私有属性

	constructor(initialBalance) {
		this.#balance = initialBalance;
	}

	deposit(amount) {
		if (amount > 0) {
			this.#balance += amount;
			console.log(`Deposited: $${amount}`);
		}
	}

	withdraw(amount) {
		if (amount > 0 && amount <= this.#balance) {
			this.#balance -= amount;
			console.log(`Withdrew: $${amount}`);
		} else {
			console.log("Insufficient funds.");
		}
	}

	getBalance() {
		console.log(`Balance: $${this.#balance}`);
		return this.#balance;
	}
}

let account = new BankAccount(1000);
account.deposit(500); // 输出: Deposited: $500
account.withdraw(200); // 输出: Withdrew: $200
account.getBalance(); // 输出: Balance: $1300



// 4. 多态性
// 多态性允许不同类的对象通过相同的接口（方法）来响应不同的行为。在 JavaScript 中，多态性通常通过继承和方法重写实现。
class Shape {
	draw() {
		console.log("Drawing a shape.");
	}
}

class Circle extends Shape {
	draw() {
		console.log("Drawing a circle.");
	}
}

class Square extends Shape {
	draw() {
		console.log("Drawing a square.");
	}
}

let shapes = [new Shape(), new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
// 输出:
// Drawing a shape.
// Drawing a circle.
// Drawing a square.



// 5. 抽象类和接口（使用 JavaScript 的约定）
// JavaScript 没有像其他编程语言那样的原生抽象类和接口，但可以通过定义父类并不直接实例化它来实现类似的效果。
class Vehicle {
	constructor(type) {
		if (new.target === Vehicle) {
			throw new Error("Cannot instantiate abstract class Vehicle directly.");
		}
		this.type = type;
	}

	startEngine() {
		throw new Error("Method 'startEngine()' must be implemented.");
	}
}

class Car extends Vehicle {
	constructor(make, model) {
		super("Car");
		this.make = make;
		this.model = model;
	}

	startEngine() {
		console.log(`${this.make} ${this.model} engine started.`);
	}
}

let myCar = new Car("Toyota", "Corolla");
myCar.startEngine(); // 输出: Toyota Corolla engine started.