import React from "react";

const BaseComplexity2 = () => {
    /**
     * 计算: 时间复杂度 ( 等待笔记 )
     *      a) 详见"log-algorithm"日志
     */

    // 示例1: 计算时间复杂度 - 简单的for
    //      a) T(n): 1 + 1 + (n+1) + n + n =  3n + 3
    //      b) 保留最高次幂: O(n)
    function traverse1(arr) {
        // 1
        var len = arr.length;
        // 1, n+1, n
        for (var i = 0; i < len; i++) {
            // n
            console.log(arr[i]);
        }
    }

    // 示例2: 计算时间复杂度 - 嵌套的for
    //      a) T(n): 1 + 1 + (n+1) + n + n + n * (n+1) + n*n + n*n = 3 + 5n + 3(n^2)
    //      b) 保留最高次幂: O(n^2)
    function traverse2(arr) {
        // 1
        var outLen = arr.length;

        // 1, n+1, n
        for (var i = 0; i < outLen; i++) {
            // n
            var inLen = arr[i].length;

            // n, n * (n+1), n*n
            for (var j = 0; j < inLen; j++) {
                // n * n
                console.log(arr[i][j]);
            }
        }
    }

    // 示例3: 计算时间复杂度 - 递增
    //      a) 递增: 我们不清楚arr多大
    //      b) T(n): i^2 >= n --> i >= log2n
    //      c) 保留最高次幂: O(logn)
    function fn(arr) {
        var len = arr.length;

        // 不成立条件: i^2 >= n
        for (var i = 1; i < len; i = i * 2) {
            console.log(arr[i]);
        }
    }

    /**
     * 计算空间复杂度( 等待笔记 )
     *      a) 详见"log-algorithm"日志
     */

    //示例4: 计算空间复杂度 - 递增
    //  a) 递增: 我们不清楚n多大
    //  b) 变量: n, arr, i
    //  c) O(n)
    function init(n) {
        var arr = [];
        for (var i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }

    console.log("<--------- 分割线 --------->");

    return (
        <div>
            <h2>时间复杂度</h2>
        </div>
    );
};

export default BaseComplexity2;
