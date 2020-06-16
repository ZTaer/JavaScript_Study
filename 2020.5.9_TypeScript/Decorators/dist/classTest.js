"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('*****************');
/* 主动bind，对象中的函数，调用时无需bind( 完成笔记 ) */
// a) 注意：其实按照ES6习惯的正常写法，默认就无需bind，但是ES5习惯的写法需要写bind
// b) 正常写法: button.addEventListener('click', ()=>p.getDate );
// c) 无装饰器bind写法：button.addEventListener('click', p.getDate.bind(p) ); 
// d) 有装饰器，避免使用bind的写法: button.addEventListener('click', p.getDate ); 
function AutoBind(_target, _name, descriptor) {
    var originMethod = descriptor.value; // 在descriptor的value属性中为监听目标( 这里是getDate()函数 )
    var adjDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFunction = originMethod.bind(this); // 给getDate()函数提前bind，这样在使用时无需bind
            return boundFunction;
        }
    };
    return adjDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.name = 'init data';
    }
    Printer.prototype.getDate = function () {
        console.log(this.name);
    };
    __decorate([
        AutoBind
    ], Printer.prototype, "getDate", null);
    return Printer;
}());
var p = new Printer();
var button = document.querySelector('button');
// 正常写法: button.addEventListener('click', ()=>p.getDate );
// 无装饰器bind写法：button.addEventListener('click', p.getDate.bind(p) );  
button.addEventListener('click', p.getDate); // 有装饰器，避免使用bind的写法 
//# sourceMappingURL=classTest.js.map