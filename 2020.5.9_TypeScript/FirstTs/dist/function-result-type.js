"use strict";
/**
 * TS下函数返回数据类型设定( 完成笔记 )
 */
// 0. 设定函数return指定类型结果
// 1. void类型函数
// 2. undefind类型函数
// 3. never类型函数: 保证函数不返回任何数据,常用于throw主动造成错误的函数
// 设定函数返回number类型
var testDIY = function (input) {
    return input;
};
// 函数返回void类型
// a) 注意: 如果函数中无return语句，则ts认定函数为返回void
var testVoid = function (input) {
    console.log(input);
};
var testVoid_normal = function (input) {
    console.log(input);
};
// 函数返回undefind类型
// a) 注意: 如果函数有return但无返回值，则ts认定函数返回undefind
var testUndefind = function (input) {
    return;
};
var testUndefind_normal = function (input) {
    return;
};
// 函数类型( 特殊点 )
var testFunction;
testFunction = testDIY; // 因为testDIY函数符号函数设定，故不报错
// callback函数创建
// a) 当return在原函数中，尽管回调函数设定为void，但依然可以返回值
var callbackFunction = function (input0, input1, cb) {
    var result = input0 + input1;
    return cb(result);
};
// callback函数使用
console.log(callbackFunction(10, 11, function (e) {
    return e;
}));
// never类型函数创建
// a) never常用于：因为throw会终止程序，永远不会返回数据
var getError = function (msg, code) {
    throw {
        errorMSG: msg,
        errorNUM: code,
    };
};
//# sourceMappingURL=function-result-type.js.map