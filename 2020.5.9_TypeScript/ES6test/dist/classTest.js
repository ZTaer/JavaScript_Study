"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Ts中class继承( 完成笔记 )
 */
// a) class构建，class复制，class继承
// b) class中构建变量函数的方法
// 0. private
// 1. public
// 2. readonly
// 3. protected
// 4. static
// d) class中get/set函数构建及使用
var TestClass = /** @class */ (function () {
    function TestClass(testProps, id) {
        this.id = id;
        this.testPrivate = []; // class: private创建内部变量，只能class内部本身能使用，复制/继承后的class无法访问数据( 完成笔记 )
        this.testPublic = ' 公开数据 '; // class: public创建公开变量, 外界可以访问且修改( 完成笔记 )
        this.testReadonly = ' 只读数据,不可修改 '; // class: readonly只读变量，不可修改( 完成笔记 )
        this.testProtected = [' 可继承的私密数据 ']; // class: protected受保护数据，可继承使用，且只能class内部本身能使用( 完成笔记 )
        this.pro = testProps;
    }
    TestClass.testStaticFunction = function () {
        console.log('static函数');
    };
    ;
    Object.defineProperty(TestClass.prototype, "testGet", {
        get: function () {
            if (this.testPrivate) {
                return this.testPrivate;
            }
            throw console.error('没有发现变量');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestClass.prototype, "testSet", {
        set: function (props) {
            if (!props) {
                throw new Error('请传入正常的数据');
            }
            this.addTest(props);
        },
        enumerable: true,
        configurable: true
    });
    TestClass.prototype.showTest = function () {
        console.log(this.pro, this.testPrivate, this.testPublic, this.id, TestClass.testStaticLet // class( 注意 ): static静态变量函数，内部访问，与外部访问方法一样。
        );
    };
    TestClass.prototype.addTest = function (addData) {
        this.testPrivate.push(addData);
    };
    TestClass.testStaticLet = '静态变量'; // class: static构建静态变量/函数，class无需实列化即可访问使用( 完成笔记 )
    return TestClass;
}());
;
TestClass.testStaticFunction(); // 无需实列化即可访问class中的static函数/变量( 完成笔记 )
var atest = new TestClass('传入的数据', 10000);
atest.addTest('传入数据测试_1');
atest.addTest('传入数据测试_2');
atest.showTest();
atest.testSet = '使用set新传入的数据'; // 使用class中的set函数( 完成笔记 )
console.log('显示GET获取的数据:', atest.testGet);
/* 复制class( 完成笔记 ) */
var atestCopy = {
    pro: '复制class后传入的数据',
    testPublic: atest.testPublic,
    calcTest: atest.showTest,
};
atestCopy.calcTest();
/* 继承class */
var TestExtends = /** @class */ (function (_super) {
    __extends(TestExtends, _super);
    function TestExtends(testProps, id) {
        var _this = _super.call(this, testProps, id) || this;
        _this.id = id;
        return _this;
    }
    return TestExtends;
}(TestClass));
var btest = new TestExtends('继承测试', 20000);
console.log(btest);
/* abstract抽象类 */
// 只能继承，无法实列化的类，React方向感觉800年用不到
var xxx = /** @class */ (function () {
    function xxx() {
    }
    return xxx;
}());
//# sourceMappingURL=classTest.js.map