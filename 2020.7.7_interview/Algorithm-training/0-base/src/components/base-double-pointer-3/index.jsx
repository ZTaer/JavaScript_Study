import React from "react";

const BaseDoublePointer3 = () => {
    /**
     * 两数求和( 等待笔记 )
     */

    /**
     * 合并两个有序数组( 双指针 - 等待笔记 )
     *      a) 注意: 二个合并的数组，皆为同方向递增或者递减的有序数组, 才能正常介绍合并
     *      b) 有序数组: 正是因为是"有序数组"的合并，因此少了很多计算
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

    console.log("<--------- 分割线 --------->");
    return (
        <div>
            <h2>两数求和( 求差法 )</h2>
            <h2>合并两个有序数组( 双指针 )</h2>
            {merge(nums1, m, nums2, n)}
            {/* {handleCpuMerge(nums1, m, nums2, n)} */}
        </div>
    );
};

export default BaseDoublePointer3;
