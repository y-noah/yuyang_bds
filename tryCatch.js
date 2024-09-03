// 1. try...catch 语句
try {
	// 可能会引发错误的代码
	let result = 10 / 0; // 虽然在JavaScript中这不会抛出错误，但这是一个不合理的计算
	console.log(result);

	let undefinedVar = undefinedVar; // 这里会引发错误，变量未定义
} catch (error) {
	// 错误处理逻辑
	console.error("发生错误:", error.message);
} finally {
	// 无论是否发生错误，都会执行的代码
	console.log("执行完毕");
}




// 2. throw 语句
function divide(a, b) {
	if (b === 0) {
		throw new Error("除数不能为零");
	}
	return a / b;
}

try {
	let result = divide(10, 0);
	console.log(result);
} catch (error) {
	console.error("错误:", error.message);
} finally {
	console.log("尝试进行除法运算");
}




// 3. 自定义错误类型
class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "CustomError";
	}
}

function testCustomError() {
	throw new CustomError("这是一个自定义错误");
}

try {
	testCustomError();
} catch (error) {
	console.error(`${error.name}: ${error.message}`);
}



// 4. finally 块
function openFile() {
	console.log("文件已打开");
}

function closeFile() {
	console.log("文件已关闭");
}

function readFile() {
	try {
		openFile();
		// 模拟抛出错误
		throw new Error("读取文件时出错");
	} catch (error) {
		console.error(error.message);
	} finally {
		closeFile();
	}
}
readFile();




// 5. 嵌套的 try...catch 块
try {
	try {
		let num = 1;
		console.log(num.toUpperCase()); // 这行代码会导致错误，因为数字没有 toUpperCase 方法
	} catch (innerError) {
		console.error("内部错误:", innerError.message);
		throw new Error("外部错误引发");
	}
} catch (outerError) {
	console.error("外部错误:", outerError.message);
}




// 6. 异步代码中的错误处理
async function fetchData() {
	try {
		let response = await fetch("https://api.invalidurl.com/data");
		if (!response.ok) {
			throw new Error("网络响应失败");
		}
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("获取数据时出错:", error.message);
	} finally {
		console.log("异步操作结束");
	}
}
fetchData();
