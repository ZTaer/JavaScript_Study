import React from "react";
import TestFdJl from "../../components/test-fd-jl";
import TestIp from "../../components/test-ip";
import TestCloneDeep from "../../components/test-clone-deep";
import TestPromise from "../../components/test-promise";
import TestInstanceof from "../../components/test-instanceof";

const TestPages = () => {
    return (
        <div className="test-pages">
            <h2>节流防抖实验</h2>
            <TestFdJl />
            <h2>题目1: 实现函数_考察ip知识、字符串及数组操作 具体题目</h2>
            <TestIp />
            <h2>深拷贝</h2>
            <TestCloneDeep />
            <h2>简易版promise</h2>
            <TestPromise />
            <h2>实现自己的instanceof</h2>
            <TestInstanceof />
        </div>
    );
};

export default TestPages;
