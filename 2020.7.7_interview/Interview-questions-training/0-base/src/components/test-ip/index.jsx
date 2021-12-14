import React from "react";

const TestIp = () => {
    // 解题写法
    const getIPListFromStr = ( str ) => {
        let result = [];
        if (str.length < 4 || str.length > 12) return result;
        handleFor( str, [], result );
        return result;
    };

    // 递归可能
    //      a) 递归结束条件: 最后一段时终止
    //      b) 递归本身: 每一段长度有3种可能(1,2,3)
    function handleFor(input, itemAddArray, result) {
        if (itemAddArray.length === 3) {
            // 终止递归
            if (handleCheck(input)) result.push([...itemAddArray, input].join("."));
            return;
        }
        for (let i = 1; i < 4; i++) {
            if ( handleCheck(input.substr(0, i)) ) {
                // 如果合法继续递归
                handleFor(
                    input.substr(i),
                    [...itemAddArray, input.substr(0,i)],
                    result
                );
            }
        }
    }

    // 验证字段是否合法
    //      a) >= 0
    //      b) <= 255
    //      c) 一位可以为0, 超过开头不能是0
    function handleCheck(data) {
        if (!data.length) return false;
        return +data >= 0 && +data <= 255 && ( data.length > 1 ? data[0] !== "0" : true );
    }

    // 参考写法

    return (
        <div className="test-ip">
            <h5>
                题目1: 实现函数_考察ip知识、字符串及数组操作 具体题目:
                给定一个只包含数字的字符串，返回所有可能的IP地址格式 例如输入
                "25525511135" 返回 ['255.255.11.135'， '255.255.111.35'] const
                getIPListFromStr = (str) => {}
            </h5>
            { console.log('计算结果 :>> ', getIPListFromStr("25525511135")) }
        </div>
    );
};

export default TestIp;
