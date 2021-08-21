import React from "react";

const BaseStack0 = () => {
    /**
     * 栈: 先进后出过程 ( 等待笔记 )
     *      a) 详见"log-algorithm"日志
     */
    const handleCpuStackMock = () => {
        // 构建栈
        const stack = [];

        // 存入栈
        stack.push("1");
        stack.push("2");
        stack.push("3");
        stack.push("4");
        console.log("stack - 已存入 :>> ", stack);

        // 取出栈
        while (stack.length > 0) {
            console.log("stack - 取出 :>> ", stack.pop());
        }
    };

    console.log("<--------- 分割线 --------->");

    return (
        <div className="base-stack-0">
            <h2>栈: 取传过程</h2>
            {handleCpuStackMock()}
        </div>
    );
};

export default BaseStack0;
