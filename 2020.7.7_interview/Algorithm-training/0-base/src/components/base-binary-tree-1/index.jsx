import React from "react";

const BaseBinaryTree1 = () => {
    /**
     * 二叉树遍历( 等待笔记 )
     *      a) 详见"log-algorithm"日志
     */
    // 模拟二叉树数据结构
    const tree = {
        val: "0-0",
        left: {
            val: "1-0",
            left: {
                val: "2-0",
                left: {},
                right: {},
            },
            right: {
                val: "2-1",
                left: {},
                right: {},
            },
        },
        right: {
            val: "1-1",
            left: {
                val: "2-2",
                left: {},
                right: {},
            },
            right: {
                val: "2-3",
                left: {},
                right: {},
            },
        },
    };

    /**
     * 二叉树 - 递归遍历( 等待笔记 )
     *      a) 3种遍历方式，从理解角度，只是console.log位置不同
     *      b) 先序遍历: 0-0, 1-0, 2-0, 2-1, 1-1, 2-2, 2-3
     *      c) 中序遍历: 2-0, 1-0, 2-1, 0-0, 2-2, 1-1, 2-3
     *      d) 后序遍历: 2-0, 2-1, 1-0, 2-2, 2-3, 1-1, 0-0
     */
    const handleCpuTree = (treeData) => {
        if (!treeData) {
            return;
        }

        // console.log("先序遍历 :>>", treeData.val);
        handleCpuTree(treeData.left);
        console.log("中序遍历 :>>", treeData.val);
        handleCpuTree(treeData.right);
        // console.log("后序遍历 :>>", treeData.val);
    };

    console.log("<--------- 分割线 --------->");

    return (
        <div className="base-stack-0">
            <h2>二叉树: 先序遍历</h2>
            {handleCpuTree(tree)}
        </div>
    );
};

export default BaseBinaryTree1;
