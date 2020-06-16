"use strict";
console.log(' hello typescript ');
/**
 * TypeScript基础( 完成笔记 )
 */
// a) 编译文件: tsc xx.js
// b) ts默认数据类型
// 0. 数据类型的应用到，创建函数/变量/对象/数组/枚举类型等...
// d) enum: 枚举类型的使用
// e) 联合类型: (string|number)联合类型的使用
// ts规定参数类型，不符合参数类型将报错
// a) number: 数字
// b) string: 字符串
// c) boolean: 布尔类型
// d) object,{}: 对象
// 0. 实列: 
// a) 设定数据类型: const xx : { name: string; age: number } = { name: 'zt', age: 19 };
// b) 正常使用: const xx = { name:'xx' } 
// c) 注意：无需设定默认数据类型，ts会根据初始值自己判定
// 1. 注意: 注意对象类型标注内容类型，并且";"进行分割
// e) 规定参数类型意义：
// 0. 当执行一些不合理的操作时，将提前提醒你错误
// a) 比如: const a = 'xxxx'; a.map(); 那么将报错，因为ts已经认定a为字符串类型而非数组;
// 创建函数
var addNumber = function (num1, num2) {
    return num1 + num2;
};
var addString = function (num1, num2, showResult) {
    return num1 + num2;
};
// 创建变量
var test = 1; // 无需设定默认数据类型，ts会根据初始值自己判定
// 创建对象
var testObj1 = {
    name: 'zt',
    age: 19
};
var testObj2 = {
    name: 'zt',
    age: 19
};
console.log(testObj1.name);
// 创建数组
var testArray = [123, 'xx']; // 混合类型数组，对存储数据类型无要求
var testArrayString = ['xxx', 'yyy']; // 数组只能存储字符串类型
// 数组的混合存储:
// 注意: 正常情况下，无需设定默认数据类型，ts会根据初始值自己判定 
var testArrayNumberString = [1, 'test']; // 对应参数类型: 只能这么存储，不符合将报错
var testArraySN = [1, '2', 123, 'xxx']; // 多种类型混合存储: 只允许数字以及字符串类型存储
// 创建枚举类型
// a) 存储: 数值类型，字符串类型, 其它类型都不支持
// b) 只读: 其存储内容为只读，不可修改
// c) 用途: 用于代替，多个const创建变量, 方便调用，要求数据只读不可修改
var tt = 123;
var TestEnum;
(function (TestEnum) {
    TestEnum["ADMIN"] = "admin";
    TestEnum["READ_ONLY"] = "test";
    TestEnum["AUTHOR"] = "AUTHOR";
})(TestEnum || (TestEnum = {}));
;
var TestEnumIndexString;
(function (TestEnumIndexString) {
    TestEnumIndexString[TestEnumIndexString["a"] = 0] = "a";
    TestEnumIndexString[TestEnumIndexString["b"] = 1] = "b";
    TestEnumIndexString[TestEnumIndexString["c"] = 2] = "c";
})(TestEnumIndexString || (TestEnumIndexString = {}));
var TestEnumIndexNumber;
(function (TestEnumIndexNumber) {
    TestEnumIndexNumber[TestEnumIndexNumber["a"] = 3] = "a";
    TestEnumIndexNumber[TestEnumIndexNumber["b"] = 4] = "b";
    TestEnumIndexNumber[TestEnumIndexNumber["c"] = 5] = "c";
})(TestEnumIndexNumber || (TestEnumIndexNumber = {}));
var per = {
    role: TestEnum.ADMIN
};
if (per.role === TestEnum.AUTHOR) {
    console.log('success');
}
else {
    console.log(per.role, TestEnum.AUTHOR);
    console.log(TestEnum);
    console.log(TestEnumIndexString);
    console.log(TestEnumIndexNumber);
}
//# sourceMappingURL=index.js.map