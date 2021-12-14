import React from "react";

const TestInstanceof = () => {
    // 实现自己的instanceof
    //      a) 原理: 判断对象原型链中，是否有对比目标的原型
    //      b) 原型链是个，速度object，原型链终止为null/undefind
    function handleInstanceof(left, right) {
        const prototype = right.prototype;
        left = left.__proto__;
        while (true) {
            if (left === null || left === undefined) {
                return false;
            }
            if (left === prototype) {
                return true;
            }
            left = left.__proto__; // 始终深入下去
        }
    }

    return (
        <div className="test-instanceof">
            <h5>Instanceof</h5>
            {console.log("instanceof :>> ", handleInstanceof([], Array))}
        </div>
    );
};

export default TestInstanceof;
