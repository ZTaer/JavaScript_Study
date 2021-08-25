import React from "react";
import BaseStack0 from "../../components/base-stack-0/index";
import BaseBinaryTree1 from "../../components/base-binary-tree-1";
import BaseComplexity2 from "../../components/base-complexity-2";
import BaseDoublePointer3 from "../../components/base-double-pointer-3";

const BasePages = () => {
    return (
        <div className="base-pages">
            <h1>栈,队列,链表: 基础相关</h1>
            <BaseStack0 />
            <h1>二叉树遍历</h1>
            <BaseBinaryTree1 />
            <h1>时间复杂度/空间复杂度</h1>
            <BaseComplexity2 />
            <h1>双指针</h1>
            <BaseDoublePointer3 />
        </div>
    );
};

export default BasePages;
