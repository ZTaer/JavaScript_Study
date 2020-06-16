"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('--start--');
/* 装饰器( 完成笔记 ) */
// 0. 记录class代码
// a) constructor: Function: 此参数代表，抓取当前文件中的class代码
// b) 注意: constructor参数名称可随意修改
function Logger(logMsg) {
    console.log('--- Logger Start ---');
    return function (constructor) {
        console.log('--- Logger Function ---');
        console.log(logMsg);
        console.log(constructor);
    };
}
// 1. 通过装饰器，渲染H5标签
function WithTemplate(template, hookId) {
    console.log('--- WithTemplate Start ---');
    return function (constructor) {
        console.log('--- WithTemplate Function ---');
        var hookTarget = document.getElementById(hookId);
        if (hookTarget) {
            var p_1 = new constructor(); // 实列化后，可以获取class中的属性
            hookTarget.innerHTML = template;
            hookTarget.querySelector('h1').textContent = p_1.name; // 将class中name属性渲染到h1标签中
        }
    };
}
// 3. 装饰器运行顺序：
// a) 先从, 自上到下执行装饰器: Logger Start --> WithTemplate Start
// b) 在从装饰器内部return函数, 自下而上执行: WithTemplate Function --> Logger Function
// 类装饰器——优先级 4 
// 方法装饰器——优先级 2 
// 访问器或属性装饰器——优先级 3
// 参数装饰器——优先级 1 
var App = /** @class */ (function () {
    function App() {
        this.name = "Ztaer";
        console.log("---- App - Start ----");
    }
    App = __decorate([
        Logger('测试装饰器，抓取class') // 运行装饰器 - 抓取class代码
        ,
        WithTemplate("<h1>\u6E32\u67D3\u4E2A\u6807\u9898\u5427</h1>", "app-test") // 通过装饰器 - 渲染标签
    ], App);
    return App;
}());
var test = new App();
//# sourceMappingURL=index.js.map