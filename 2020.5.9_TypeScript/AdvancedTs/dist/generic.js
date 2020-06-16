"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("---start---");
/* Generic | 通用类型 | 泛型类型( 完成笔记 ) */
// a) 目的: 最大的用处是，使函数可以自由的传入/加工"数据"，ts不在报错
// b) 内置通用类型函数:
// c) 自定义通用类型函数:
// 内置通用类型
// a) 数组类型: Array<类型>
var names = [];
/* 通用类型函数function xxx<T>( 完成笔记 ) */
// a) <T,U>: 可以是任何类型数据
// b) 根据命名约定，应该以单个大写字母命名
// c) 传入各种对象数据，ts不报错
// d) 约束类型: <T extends object>: 约束为对象类型，当然也可以约束为其它类型
// 0. 继承属性: 在下方length实列
function merge(objA, objB) {
    if (typeof objA == 'string' || typeof objB == 'string') {
        return __assign(__assign({}, objA), objB);
    }
}
var mergeObject = merge({ name: 'zt' }, { age: 19 });
function testExtendsFunction(inputString) {
    var resultDes = '';
    if (inputString.length === 1) { // 如果没有继承属性length，将报错
        resultDes = '长度为1';
    }
    else if (inputString.length > 1) {
        resultDes = "\u957F\u5EA6\u4E3A" + inputString.length;
    }
    return [inputString, resultDes];
}
console.log(testExtendsFunction('测试'));
/* 通用类型class xxx<T>( 完成笔记 ) */
// a) 通用类型约束：多种类型数据约束<T extends xxx | yyy | ccc >
var TestControlArray = /** @class */ (function () {
    function TestControlArray() {
        var _this = this;
        this.initArray = []; // 注意原始数组也要为T类型
        this.addArrayItem = function (item) {
            _this.initArray.push(item);
        };
        this.removeArrayItem = function (item) {
            var targetIndex = _this.initArray.indexOf(item);
            if (targetIndex >= 0) {
                _this.initArray.splice(targetIndex, 1);
            }
        };
        this.getArrayItem = function () {
            console.log(_this.initArray);
            return _this.initArray;
        };
    }
    return TestControlArray;
}());
var testNewControlArray = new TestControlArray();
testNewControlArray.addArrayItem('123');
testNewControlArray.addArrayItem(123);
testNewControlArray.addArrayItem(false);
testNewControlArray.getArrayItem();
testNewControlArray.removeArrayItem("123");
testNewControlArray.getArrayItem();
var testNewControlArray_string = new TestControlArray(); // 约束实列类型: 只能字符串操控
testNewControlArray_string.addArrayItem('xxx');
// 注意: 要求输出结果为DateGoal
function testPartial(name, age, addr) {
    var result = {}; // Partial< xxxx >: 告诉ts，目标将成为xxx类型，请先不要报错
    result.name = name;
    result.age = age;
    result.addr = addr;
    return result; // 输出数据时，如果报错，则使用“as转换其要求输出的类型”
}
/* Readonly<xxx> 只读类型( 完成笔记 ) */
// a) 只读类型的数据，无法修改
var inputReadonly = ['zt', '19'];
/* "通用类型" 与 "联合类型" 区别( 完成笔记 ) */
// a) 通用类型：在class中或者函数中，一开始就抉择数据类型
// 0. extends - 约束通用类型的目的:  约束允许您缩小可能在通用函数等中使用的具体类型。
// b) 联合类型: 在class中或者函数中，一开始不能统一抉择数据类型
// c) 通用类型更加灵活，如上方的 const testNewControlArray_string = new TestControlArray<string>(), 如果只使用联合类型是很难实现这一步的。
// d) 何时使用通用类型: 如果您拥有一个实际上可以与其他多种可能的类型一起使用的类型（例如，发出不同类型数据的对象）- 官方语。
//# sourceMappingURL=generic.js.map