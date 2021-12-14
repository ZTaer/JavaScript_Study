import React from "react";

const TestCloneDeep = () => {
    const data = {
        a: [1, 2, 3],
        b: {
            c: 1,
            d: 2,
        },
    };

    /**
     * 深拷贝( 等待笔记 )
     *      a) 递归终止条件: 不是object
     *      b) 判断数据是否为object类型条件
     *          0. 不为null
     *          1. typeof是"object"或者"function"
     */
    const handleCloneDeep = (data) => {
        // 判断: 是否object类型数据
        const handleCloneDeep__isObject = (target) => {
            return (
                target !== null &&
                (typeof target === "object" || typeof target === "function")
            );
        };

        // 递归终止条件
        if (handleCloneDeep__isObject(data) === false) {
            throw new Error("非对象");
        }

        // 递归体
        let result = data instanceof Array ? [...data] : { ...data };
        Object.keys(data).forEach((item) => {
            // 如果是object则继续递归
            result[item] = handleCloneDeep__isObject(data[item])
                ? handleCloneDeep(data[item])
                : data[item];
        });

        return result;
    };

    return (
        <div className="test-clone-deep">
            <h3>深拷贝递归方法</h3>
            {console.log("深拷贝 :>> ", handleCloneDeep(data))}
        </div>
    );
};

export default TestCloneDeep;
