import React from "react";

const BaseString4 = () => {
    /**
     * 反转字符串( 等待笔记 )
     */
    const handleCpuReverseString = (data) => {
        return data.split("").reverse().join("");
    };

    /**
     * 判断回文字符串( 等待笔记 )
     *      0. 回文字符串: 就是正着读和倒着读都一样的字符串
     *          a) 判断方法1: 利用反转字符串方法, 反转结果 === 反转前, 则为回文字符串
     *          b) 判断方法2: 对称性, 前后迭代比对接口相等 ( 重要特性 - 常用 )
     */
    // 判断方法1: 反转字符串方法
    const handleCpuIfPalindromeString_1 = (data) => {
        const reverseData = data.split("").reverse().join("");

        if (reverseData === data) {
            return true;
        }
        return false;
    };

    // 判断方法2: 对称性
    const handleCpuIfPalindromeString_2 = (data) => {
        let left = 0;
        let right = data.length - 1;
        for (let i = 0; i < data.length / 2; i++) {
            console.log("i :>> ", i);
            if (data[left] !== data[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    /**
     * 回文字符串的衍生问题( 等待笔记 )
     *      0. 真题描述：给定一个非空字符串s, 最多删除一个字符, 判断是否能成为回文字符串。
     *      1. 解析:
     *          a) 对撞指针
     *      2. 注意: 做笔记时要配图
     */

    // 参考版本
    const validPalindrome = function (s) {
        // 缓存字符串的长度
        const len = s.length;

        // i、j分别为左右指针
        let i = 0,
            j = len - 1;

        // 当左右指针均满足对称时，一起向中间前进
        while (i < j && s[i] === s[j]) {
            i++;
            j--;
        }

        // 尝试判断跳过左指针元素后字符串是否回文
        if (isPalindrome(i + 1, j)) {
            return true;
        }
        // 尝试判断跳过右指针元素后字符串是否回文
        if (isPalindrome(i, j - 1)) {
            return true;
        }

        // 工具方法，用于判断字符串是否回文
        function isPalindrome(st, ed) {
            while (st < ed) {
                if (s[st] !== s[ed]) {
                    return false;
                }
                st++;
                ed--;
            }
            return true;
        }

        // 默认返回 false
        return false;
    };

    // 个人版本
    //      a) 总体思路:
    //          0. 利用回文的，对称性，进行对撞指针比对
    //          1. 比对正确: 则双指针前进
    //          2. 比对错误:
    //              a) 则: 左指针跳过 --至--> 右指针: 判断此区间是否为回文
    //                  0. 是: 则可以断定,删除左指针一个字符,为回文
    //                  1. 否: 验证右指针跳过 --至--> 左指针: 判断此区间是否为回文
    //              b) 如果都不满足以上2个条件，则可断定此字符串不能成为回文
    const handleCpuValidPalindrome = (data) => {
        // 0. 建立左右指针
        let left = 0,
            right = data.length - 1;

        // 1. 方法: 验证是否为回文字符串
        const handleCpuValidPalindrome__ifPalindromeString = (
            leftPos,
            rightPos
        ) => {
            // 注意: 因为rightPos不断递减, 因此leftPos与rightPos直接比对，会在区间中间位置对撞停止计算
            while (leftPos < rightPos) {
                if (data[leftPos] !== data[rightPos]) {
                    return false;
                }
                leftPos++;
                rightPos--;
            }
            return true;
        };

        // 2. 对撞判断是否不对称
        while (left < right && data[left] === data[right]) {
            left++;
            right--;
        }

        // 3. 验证区间是否为回文, 是则返回true,正面删除一个字符,成立回文
        if (handleCpuValidPalindrome__ifPalindromeString(left + 1, right)) {
            return true;
        }
        if (handleCpuValidPalindrome__ifPalindromeString(left, right - 1)) {
            return true;
        }

        // 4. 返回false代表，删除一个字符, 不能成立回文
        return false;
    };

    console.log("<--------- 分割线 --------->");
    return (
        <div className="base-string-4">
            <h2>反转字符串</h2>
            {console.log("反转字符串 :>> ", handleCpuReverseString("yydddsss"))}
            <h2>判断回文字符串</h2>
            {console.log(
                "判断方法1: 反转字符串方法 :>> ",
                handleCpuIfPalindromeString_1("yydyy")
            )}
            {console.log(
                "判断方法2: 对称性 :>> ",
                handleCpuIfPalindromeString_2("yydyy")
            )}
            <h2>回文字符串的衍生问题</h2>
            {console.log("参考版本 :>> ", validPalindrome("abca"))}
            {console.log("个人版本 :>> ", handleCpuValidPalindrome("abca"))}
        </div>
    );
};

export default BaseString4;
