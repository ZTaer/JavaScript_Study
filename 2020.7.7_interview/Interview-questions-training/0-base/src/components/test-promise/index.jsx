import React from "react";

const TestPromise = () => {
    /**
     * 简化版Promise( 等待笔记 )
     *      a) promise有3种状态: "等待/pending", "完成/resolve", "拒绝/reject"
     *          0. 基本状态铺底: state, value, callbackArray
     *          1. 针对resove/reject函数写法
     *              a) 改变状态，以及赋值value，铺垫then
     *          2. 核心try catch逻辑
     *      b) then写法:
     *          0. 给props做初始值逻辑
     *          1. 应对3种状态逻辑
     */
    function MyPromise(fn) {
        // 基本状态
        const that = this;
        that.state = "PENDING"; // "PENDING", "RESOLVED", "REJECTED"
        that.value = null;
        that.resolvedCallbacks = [];
        that.rejectedCallbacks = [];

        // 基本方法
        function resolve(value) {
            if (that.state === "PENDING") {
                that.state = "RESOLVED";
                that.value = value;
                that.resolvedCallbacks.map((cb) => cb(that.value)); // 为then做铺垫
            }
        }

        function reject(value) {
            if (that.state === "PENDING") {
                that.state = "REJECTED";
                that.value = value;
                that.rejectedCallbacks.map((cb) => cb(that.value));
            }
        }

        // 核心逻辑
        try {
            fn(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    MyPromise.prototype.then = function (onResove, onReject) {
        // 初始化props
        const that = this;
        onResove = typeof onResove === "function" ? onResove : (e) => e;
        onReject =
            typeof onReject === "function"
                ? onReject
                : (e) => {
                      throw e;
                  };
        // 核心逻辑
        if (that.state === "PENDING") {
            that.resolvedCallbacks.push(onResove);
            that.rejectedCallbacks.push(onReject);
        }
        if (that.state === "RESOLVED") {
            onResove(that.value);
        }
        if (that.state === "REJECTED") {
            onReject(that.value);
        }
    };

    // 测试Promise
    new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 0);
    }).then((value) => {
        console.log(value);
    });

    /**
     * 盲写Promise
     */
    function TestPromise(fn) {
        // 基本状态
        const that = this;
        that.state = "peading"; // "peading", "resolve", "reject"
        that.value = null;
        that.resolveCallbackArray = [];
        that.rejectCallbackArray = [];

        // 方法
        function resolve(value) {
            if (that.state === "peading") {
                that.state = "resolve";
                that.value = value;
                that.resolveCallbackArray.map((cb) => cb(that.value));
            }
        }

        function reject(value) {
            if (that.state === "peading") {
                that.state = "reject";
                that.value = value;
                that.rejectCallbackArray.map((cb) => cb(that.value));
            }
        }

        // 核心逻辑
        try {
            fn(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    // then
    TestPromise.prototype.then = function (onResolve, onReject) {
        // 基本props
        const that = this;
        onResolve = typeof onResolve === "function" ? onResolve : (e) => e;
        onReject =
            typeof onReject === "function"
                ? onReject
                : (e) => {
                      throw e;
                  };

        // 根据状态执行逻辑
        // 数组
        if (that.state === "paeding") {
            that.resolveCallbackArray.push(onResolve);
            that.rejectCallbackArray.push(onReject);
        }
        // 返回函数
        if (that.state === "resolve") {
            onResolve(that.value);
        }
        if (that.state === "reject") {
            onReject(that.value);
        }
    };

    new TestPromise((resolve, reject) => {
        resolve(1);
    }).then((value) => {
        console.log("value :>> ", value);
    });

    return (
        <div className="test-promise">
            <h5>简易版promise</h5>
        </div>
    );
};

export default TestPromise;
