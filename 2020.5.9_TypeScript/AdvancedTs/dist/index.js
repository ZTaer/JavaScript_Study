"use strict";
var _a;
console.log('---start---');
var testInput = {
    name: 'zt',
    age: 19,
    addr: 'xxx',
    time: new Date()
};
console.log(testInput);
var TestInputCD = '交集';
; // 多个interface合并核心
var interfaceInput = {
    name: '007',
    age: 19,
    time: new Date,
    addr: 'xxxxxx'
};
var functionOrTest = function (props) {
    var speed;
    switch (props.type) { // 函数中，必须要有类型判断，否则将无法正常使用
        case "bired":
            speed = props.flaySpeed;
            break;
        case "car":
            speed = props.runSpeed;
            break;
    }
    console.log(props.type + " - SPEED: " + speed);
};
functionOrTest({ type: 'car', runSpeed: 666 });
/* ts: 在ts中document正确的使用方法，防止报错( 完成笔记 ) */
/* ts: as类型转换,非常重要且常用( 完成笔记 ) */
// a) 目的: 声明doucument抓取标签的类型，防止ts报错
// 0. 方法一: <HTMLInputElement>
// 1. 方法二: as HTMLInputElement, "as"告诉ts此乃document抓取的标签类型
// b) "as" 在ts中是类型转换功能
// 方法一:
var buttonA = document.querySelector("#testInput");
buttonA.value = 'xxx';
// 方法二: "as"告诉ts此乃document抓取的标签类型, 否则将报错
var buttonB = document.querySelector("#testInput");
buttonB.value = 'yyy';
var testName = {
    email: 'xxx@gmail.com',
    addr: 'xxxxx',
};
function testLoadFunction(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = testLoadFunction('ztaetr', 'xxx');
result.split('r'); // 报错: 如果没有"函数重载"，那么将报错
/* "?"可选符号( 完成笔记 ) */
// a) 函数中: 告诉ts为可选参数
// b) 索引变量中: 告诉ts我也不知是否能索引成功
// c) 目的: 告诉ts不要因为不确定变量来报错
var axiosUserDate = {
    id: 'xxx',
    name: 'zt',
};
console.log((_a = axiosUserDate === null || axiosUserDate === void 0 ? void 0 : axiosUserDate.job) === null || _a === void 0 ? void 0 : _a.title // "?": 保证索引数据不存在js也能正常运行，并返回undefind，但ts会提示错误
);
// "??"双重可选符
// a) 目的: 给变量备用数据
// b) xx ?? bb: 如果xx数据为真，则返回真实数据，否则返回bb准备好的数据;
// c) 特殊点: ''空字符串也会被??视为真
var testInputDate = '';
var getDate = testInputDate !== null && testInputDate !== void 0 ? testInputDate : '备用数据'; // 备用数据
console.log(getDate);
//# sourceMappingURL=index.js.map