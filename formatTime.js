// 1. 获取当前日期和时间
let now = new Date();
console.log(now);
// 输出当前的日期和时间，例如：2024-08-27T06:42:37.284Z

// 获取具体的年、月、日、时、分、秒
let year = now.getFullYear();
let month = now.getMonth() + 1; // 月份从 0 开始，所以加 1
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`当前时间是：${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
// 输出类似 "当前时间是：2024-8-27 14:42:37"




// 2. 时间戳的使用
// 时间戳是从 1970 年 1 月 1 日 00:00:00 UTC 到现在的毫秒数。
// 获取当前时间戳
let timestamp = Date.now();
console.log(timestamp);
// 输出当前的时间戳，例如：1725247357284
// 将时间戳转换为日期
let date = new Date(timestamp);
console.log(date);
// 输出类似的日期格式：2024-08-27T06:42:37.284Z




// 3. 设置特定日期和时间
// 创建一个特定的日期对象，例如 2024 年 12 月 25 日 15:30:00
let specificDate = new Date(2024, 11, 25, 15, 30, 0);
console.log(specificDate);
// 输出 "2024-12-25T07:30:00.000Z" （根据时区可能有所不同）




// 4. 日期加减操作
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log(tomorrow);
// 输出明天的日期，例如 "2024-08-28T06:42:37.284Z"
// 计算两个日期之间的天数差
let startDate = new Date(2024, 7, 1); // 2024 年 8 月 1 日
let endDate = new Date(2024, 7, 27);  // 2024 年 8 月 27 日

let timeDiff = endDate - startDate; // 时间差以毫秒为单位
let dayDiff = timeDiff / (1000 * 60 * 60 * 24); // 转换为天数

console.log(`两个日期之间的天数差为：${dayDiff}`);
// 输出 "两个日期之间的天数差为：26"




// 5. 格式化日期和时间
let date = new Date();
let formattedDate = date.toLocaleDateString('en-US');
let formattedTime = date.toLocaleTimeString('en-US');

console.log(`格式化日期：${formattedDate}`); // 输出类似 "8/27/2024"
console.log(`格式化时间：${formattedTime}`); // 输出类似 "2:42:37 PM"
// 自定义日期格式
function formatDate(date) {
	let year = date.getFullYear();
	let month = String(date.getMonth() + 1).padStart(2, '0');
	let day = String(date.getDate()).padStart(2, '0');
	let hours = String(date.getHours()).padStart(2, '0');
	let minutes = String(date.getMinutes()).padStart(2, '0');
	let seconds = String(date.getSeconds()).padStart(2, '0');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

let formatted = formatDate(new Date());
console.log(formatted);
// 输出类似 "2024-08-27 14:42:37"



// 6. 定时任务
// setTimeout: 延迟执行一次代码
setTimeout(() => {
	console.log('这是延迟 2 秒后执行的代码');
}, 2000); // 2000 毫秒（2 秒）

// setInterval: 每隔一定时间重复执行代码
let count = 0;
let intervalId = setInterval(() => {
	count += 1;
	console.log(`间隔执行：第 ${count} 次`);
	if (count >= 5) {
		clearInterval(intervalId); // 停止执行
	}
}, 1000); // 每隔 1000 毫秒（1 秒）
