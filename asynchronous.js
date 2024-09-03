// 1. 回调函数
// 回调函数是最基本的异步处理方式。它将一个函数作为参数传递给另一个函数，在异步操作完成时调用该函数。
function fetchData(callback) {
	setTimeout(() => {
		let data = "Data fetched!";
		callback(data); // 异步操作完成后调用回调函数
	}, 1000);
}

fetchData((result) => {
	console.log(result); // 输出: Data fetched!
});



// 2. Promise 对象
// Promise 是用于处理异步操作的对象，它代表了一个异步操作的最终完成（或失败）及其结果值。
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let success = true;
			if (success) {
				resolve("Data fetched successfully!"); // 操作成功，调用 resolve
			} else {
				reject("Failed to fetch data."); // 操作失败，调用 reject
			}
		}, 1000);
	});
}

fetchData()
	.then(result => console.log(result)) // 输出: Data fetched successfully!
	.catch(error => console.log(error));



// 3. async/await
// 	async/await 是基于 Promise 的语法糖，使得异步代码看起来更像同步代码，更易于理解和维护。
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let success = true;
			if (success) {
				resolve("Data fetched successfully!");
			} else {
				reject("Failed to fetch data.");
			}
		}, 1000);
	});
}

async function getData() {
	try {
		let result = await fetchData(); // 等待 Promise 解决
		console.log(result); // 输出: Data fetched successfully!
	} catch (error) {
		console.log(error);
	}
}

getData();



// 4. 并行执行异步操作
// 可以使用 Promise.all() 同时执行多个异步操作，并在所有操作完成后处理结果。
function fetchData1() {
	return new Promise(resolve => setTimeout(() => resolve("Data 1 fetched!"), 1000));
}

function fetchData2() {
	return new Promise(resolve => setTimeout(() => resolve("Data 2 fetched!"), 2000));
}

async function getAllData() {
	let results = await Promise.all([fetchData1(), fetchData2()]);
	console.log(results); // 输出: ["Data 1 fetched!", "Data 2 fetched!"]
}

getAllData();



// 5. 处理异步操作中的错误
// 错误处理在异步操作中非常重要，特别是当多个异步操作需要并行执行时。
function fetchData1() {
	return new Promise((resolve, reject) => setTimeout(() => reject("Fetch 1 failed!"), 1000));
}

function fetchData2() {
	return new Promise(resolve => setTimeout(() => resolve("Data 2 fetched!"), 2000));
}

async function getData() {
	try {
		let result = await Promise.race([fetchData1(), fetchData2()]);
		console.log(result); // 如果 fetchData1 失败，则输出: "Fetch 1 failed!"
	} catch (error) {
		console.log(error);
	}
}

getData();