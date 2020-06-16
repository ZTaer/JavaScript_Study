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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('---Start---');
var pushValidate = {};
function RequiredTitle(target, name) {
    var _a;
    pushValidate[target.constructor.name] = __assign(__assign({}, pushValidate[target.constructor.name]), (_a = {}, _a[name] = 'required', _a));
}
function RequiredNumber(target, name) {
    var _a;
    pushValidate[target.constructor.name] = __assign(__assign({}, pushValidate[target.constructor.name]), (_a = {}, _a[name] = 'positive', _a));
}
function validate(objDate) {
    if (!objDate) {
        return true;
    }
    var result = true;
    console.log(pushValidate);
    for (var props in pushValidate) {
        for (var item in pushValidate[props]) {
            switch (pushValidate[props][item]) {
                case 'required':
                    result = result && !!objDate[item];
                    break;
                case 'positive':
                    result = result && objDate[item] > 0;
                    break;
            }
        }
    }
    console.log(result);
    return result;
}
var Course = /** @class */ (function () {
    function Course(title, price) {
        this.title = title;
        this.price = price;
    }
    __decorate([
        RequiredTitle
    ], Course.prototype, "title", void 0);
    __decorate([
        RequiredNumber
    ], Course.prototype, "price", void 0);
    return Course;
}());
var currentFrom = document.getElementById("input-from");
currentFrom.addEventListener('submit', function (event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var titleDoc = document.getElementById("title");
    var priceDoc = document.getElementById("price");
    var title = titleDoc.value.toString();
    var price = +priceDoc.value;
    var createCourse = new Course(title, price);
    console.log(createCourse);
    console.log(pushValidate);
    if (!validate(createCourse)) {
        alert(" 输出错误!!! ");
    }
});
//# sourceMappingURL=fromInput.js.map