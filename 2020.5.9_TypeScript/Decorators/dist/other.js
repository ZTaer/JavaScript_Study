"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('--- --- --- other分割线 --- --- ---');
/* 装饰器：监听抓取方式( 完成笔记 ) */
// a) 装饰器监听方式: @xxx yyyy;
// b) 参数:
// 0. 装饰器监听类型: class中的函数, class中的set函数，class中的变量： ( target: any, name: string | Symbol, des?: PropertyDescriptor )
// 1. 装饰器监听类型: 函数中的参数：( target: any, name: string | Symbol, position?:number )
// 监听class中的变量
function Logger0(target, name, des) {
    console.log('Logger - 0 ------');
    console.log('target:', target);
    console.log('name:', name);
    console.log('des:', des);
}
// 监听class中的set
function Logger1(target, name, des) {
    console.log('Logger - 1 ------');
    console.log('target:', target);
    console.log('name:', name);
    console.log('des:', des);
}
// 监听函数
function Logger2(target, name, des) {
    console.log('Logger - 2 ------');
    console.log('target:', target);
    console.log('name:', name);
    console.log('des:', des);
}
// 监听函数中的参数
function Logger3(target, name, position) {
    console.log('Logger - 3 ------');
    console.log('target:', target);
    console.log('name:', name);
    console.log('popsition:', position);
}
var Product = /** @class */ (function () {
    function Product(t, p) {
        this.titles = t;
        this._price = p;
        console.log('开始');
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.getPrice = function (tax) {
        return this._price * (1 + tax);
    };
    __decorate([
        Logger0
    ], Product.prototype, "titles", void 0);
    __decorate([
        Logger1
    ], Product.prototype, "price", null);
    __decorate([
        Logger2
    ], Product.prototype, "getPrice", null);
    Product = __decorate([
        __param(1, Logger3)
    ], Product);
    return Product;
}());
//# sourceMappingURL=other.js.map