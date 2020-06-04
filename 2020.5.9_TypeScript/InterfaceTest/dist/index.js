"use strict";
console.log('--- start ---');
// class使用对象模板构建
var TestImplements = /** @class */ (function () {
    function TestImplements(nameProps) {
        this.name = '007';
        this.age = 19;
        this.tel = 110;
        this.show = function (text) {
            console.log(text + ": " + userOne.name);
        };
        nameProps ? this.name = nameProps : null;
    }
    return TestImplements;
}());
// let/const变量使用对象模板构建及使用
var userOne; // 变量设定为interface类型
userOne = {
    name: 'ztaer',
    age: 22,
    tel: 120,
    show: function (text) {
        console.log(text + ": " + userOne.name);
    }
};
userOne.show('名字'); // 没什么特殊的，正常使用即可
// 注意: 同interface模板情况下可以被赋值使用
userOne = new TestImplements(); // userOne及可以自己构建对象，也可以被赋值同模板的class
userOne.show('class使用对象模板');
var testInterfaceFunction = function (num) {
    return num;
};
//# sourceMappingURL=index.js.map