/**
 * TS下函数返回数据类型设定
 */
// 0. 设定函数return指定类型结果
// 1. void类型函数
// 2. undefind类型函数

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
// a) 尽管回调函数设定为void，但依然可以返回值
var callbackFunction = function (input0, input1, cb) {
    var result = input0 + input1;
    return cb(result);
};
// callback函数使用
console.log(callbackFunction(10, 11, function (e) {
    return e;
}));
