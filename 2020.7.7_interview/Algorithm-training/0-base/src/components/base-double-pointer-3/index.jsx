import React from "react";

const BaseDoublePointer3 = () => {
    /**
     * 两数求和( 等待笔记 )
     */

    /**
     * 合并两个有序数组( 双指针 - 等待笔记 )
     *      a) 注意: 二个合并的数组，皆为同方向递增或者递减的有序数组, 才能正常介绍合并
     *      b) 有序数组: 正是因为是"有序数组"的合并，因此少了很多计算
     *      c) 核心思路: 是二个有序数组进行比较，因此从尾部开始对比，填坑
     */
    const nums1 = [1, 3, 6, 0, 0, 0],
        m = 3,
        nums2 = [2, 4, 7],
        n = 3;

    // 参考版本
    const merge = function (nums1, m, nums2, n) {
        // 初始化两个指针的指向，初始化 nums1 尾部索引k
        let i = m - 1, // 针对nums1
            j = n - 1, // 针对nums2
            k = m + n - 1; // 指向存储尾部, 目的是从后往前塞
        // 当两个数组都没遍历完时，指针同步移动
        while (i >= 0 && j >= 0) {
            // 取较大的值，从末尾往前填补
            // 大的指针递减，小的指针不变
            if (nums1[i] >= nums2[j]) {
                nums1[k] = nums1[i];
                i--;
                k--;
            } else {
                nums1[k] = nums2[j];
                j--;
                k--;
            }
        }

        // nums2 留下的情况，特殊处理一下
        while (j >= 0) {
            nums1[k] = nums2[j];
            k--;
            j--;
        }

        console.log("参考 - nums1,nums2 :>> ", nums1, nums2);
    };

    // 个人版本
    const handleCpuMerge = (nums1, m, nums2, n) => {
        let nums1Pos = m - 1,
            nums2Pos = n - 1,
            endPos = m + n - 1;

        let loop = 0;

        while (nums1Pos >= 0 && nums2Pos >= 0) {
            if (nums1[nums1Pos] >= nums2[nums2Pos]) {
                nums1[endPos] = nums1[nums1Pos];
                nums1Pos--;
                endPos--;
            } else {
                nums1[endPos] = nums2[nums2Pos];
                nums2Pos--;
                endPos--;
            }
            loop++;
            console.log("nums1 :>> ", nums1, nums1Pos, nums2Pos);
        }

        // 防止num2有剩余
        while (nums2Pos >= 0) {
            nums1[endPos] = nums2[nums2Pos];
            nums2Pos--;
            endPos--;
            loop++;
            console.log("nums1 :>> ", nums1, nums1Pos, nums2Pos);
        }

        console.log("个人 - nums1,nums2 :>> ", nums1, nums2, "循环次数", loop);
    };

    /**
     * 三数求和问题( 对撞双指针 - 等待笔记 )
     *      a) 注意:
     *          0. 要求结果不能重复, 因此遇到相等的数时要跳过
     *          1. 笔记带图解，方便理解，对撞双指针
     *          2. 使用双指针，要排序数组
     *      b) 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
     *      c) 对撞双指针:
     *          0. 注意: 保证加工数据为有序数组
     *          1. 什么是对撞指针: 开头指针++, 尾部位置--, 二者对撞结束循环
     */
    const three = [-1, 0, 1, 2, -1, -4]; // 计算结果:  [ [-1, 0, 1], [-1, -1, 2] ]

    // 参考版本
    const threeSum = function (nums) {
        // 用于存放结果数组
        let res = [];
        // 给 nums 排序
        nums = nums.sort((a, b) => {
            return a - b;
        });
        // 缓存数组长度
        const len = nums.length;
        // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
        for (let i = 0; i < len - 2; i++) {
            // 左指针 j
            let j = i + 1;
            // 右指针k
            let k = len - 1;
            // 如果遇到重复的数字，则跳过
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            while (j < k) {
                // 三数之和小于0，左指针前进
                if (nums[i] + nums[j] + nums[k] < 0) {
                    j++;
                    // 处理左指针元素重复的情况
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                } else if (nums[i] + nums[j] + nums[k] > 0) {
                    // 三数之和大于0，右指针后退
                    k--;

                    // 处理右指针元素重复的情况
                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }
                } else {
                    // 得到目标数字组合，推入结果数组
                    res.push([nums[i], nums[j], nums[k]]);

                    // 左右指针一起前进
                    j++;
                    k--;

                    // 若左指针元素重复，跳过
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }

                    // 若右指针元素重复，跳过
                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }
                }
            }
        }

        // 返回结果数组
        return res;
    };

    // 个人版本
    //      a) 逻辑思路:
    //          0. 固定一位, 对撞2位
    //          1. 排序数组
    //          2. for遍历数据nums, 到小于nums.length长度2停止遍历
    //              a) 停止原因: 这2位留给对撞指针
    //              b) 排序接受的数据
    //              c) 防重复逻辑
    //              d) while循环计算: 验证是否符合要求, 固定 + 左指针 + 右指针 = 0
    //                  0. 设定左右指针
    //                  1. 是: 则加入计算结果, 并左右指针一起前进
    //                  2. 否:
    //                      a) 计算结果 < 0 : 左指针前进, 右指针不变
    //                          0. 防重复逻辑
    //                      b) 计算结果 > 0 : 右指针前进, 左指针不变
    //                          0. 防重复逻辑
    //                  3. 当左指针位置 > 右指针, 停止while循环，for循环前进
    //                          0. 防重复逻辑

    // 结果有重复版本
    const handleCpuTreeNums = (nums) => {
        let result = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            let leftPos = i + 1;
            let rightPos = nums.length - 1;

            while (leftPos < rightPos) {
                if (nums[i] + nums[leftPos] + nums[rightPos] < 0) {
                    leftPos++;
                    continue;
                } else if (nums[i] + nums[leftPos] + nums[rightPos] > 0) {
                    rightPos--;
                    continue;
                } else {
                    result.push([nums[i], nums[leftPos], nums[rightPos]]);
                    leftPos++;
                    rightPos--;
                }
            }
        }
        return result;
    };

    // 结果无重复版本
    const handleCpuTreeNumsPlus = (nums) => {
        let result = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            let leftPos = i + 1;
            let rightPos = nums.length - 1;

            // 防重复逻辑
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            while (leftPos < rightPos) {
                if (nums[i] + nums[leftPos] + nums[rightPos] < 0) {
                    leftPos++;

                    // 防重复逻辑
                    while (
                        leftPos < rightPos &&
                        nums[leftPos] === nums[leftPos - 1]
                    ) {
                        leftPos++;
                    }

                    continue;
                } else if (nums[i] + nums[leftPos] + nums[rightPos] > 0) {
                    rightPos--;

                    // 防重复逻辑
                    while (
                        leftPos < rightPos &&
                        nums[rightPos] === nums[rightPos + 1]
                    ) {
                        rightPos--;
                    }

                    continue;
                } else {
                    result.push([nums[i], nums[leftPos], nums[rightPos]]);
                    leftPos++;
                    rightPos--;

                    // 防重复逻辑
                    while (
                        leftPos < rightPos &&
                        nums[leftPos] === nums[leftPos - 1]
                    ) {
                        leftPos++;
                    }
                    while (
                        leftPos < rightPos &&
                        nums[rightPos] === nums[rightPos + 1]
                    ) {
                        rightPos--;
                    }
                }
            }
        }
        return result;
    };

    console.log("<--------- 分割线 --------->");
    return (
        <div>
            <h2>两数求和( 求差法 )</h2>
            <h2>合并两个有序数组( 双指针 )</h2>
            {merge(nums1, m, nums2, n)}
            {/* {handleCpuMerge(nums1, m, nums2, n)} */}
            <h2>三数求和问题( 对撞双指针 )</h2>
            {console.log(
                "三数求和问题( 对撞双指针 - 参考版 ):>> ",
                threeSum(three)
            )}
            {console.log(
                "三数求和问题( 对撞双指针 - 个人版 ):>> ",
                "重复",
                handleCpuTreeNums(three),
                "不重复",
                handleCpuTreeNumsPlus(three)
            )}
        </div>
    );
};

export default BaseDoublePointer3;
