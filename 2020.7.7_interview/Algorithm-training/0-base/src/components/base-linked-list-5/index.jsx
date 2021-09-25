import React from "react";

const BaseLinkedList5 = () => {
    /**
     * ListNode: 链表构建方法( 等待笔记 )
     */
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    /**
     * 真题: 合并二个有序链表( 等待笔记 )
     *      0. 真题描述
     *          a) 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
     *          b) 超出链表部分，拼在尾部
     *      1. 解析: 穿针引线
     *      2. 注意: 二个链表方法，操控同一个数据, 页面会崩溃
     */
    const list1 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 4,
                next: null,
            },
        },
    };
    const list2 = {
        val: 1,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    };

    // 参考版本
    const mergeTwoLists = function (l1, l2) {
        // 定义头结点，确保链表可以被访问到
        let head = new ListNode();
        // cur 这里就是咱们那根“针”
        let cur = head;
        // “针”开始在 l1 和 l2 间穿梭了
        while (l1 && l2) {
            // 如果 l1 的结点值较小
            if (l1.val <= l2.val) {
                // 先串起 l1 的结点
                cur.next = l1;
                // l1 指针向前一步
                l1 = l1.next;
            } else {
                // l2 较小时，串起 l2 结点
                cur.next = l2;
                // l2 向前一步
                l2 = l2.next;
            }

            // “针”在串起一个结点后，也会往前一步
            cur = cur.next;
        }

        // 处理链表不等长的情况
        cur.next = l1 !== null ? l1 : l2;
        // 返回起始结点
        return head.next;
    };

    // 个人版本
    const handleCpuMergeListNode = (L1, L2) => {
        // 链表给个开头
        let head = new ListNode();
        let curPos = head;

        while (L1 && L2) {
            if (L1.val <= L2.val) {
                curPos.next = L1;
                L1 = L1.next; // 前进指针
            } else {
                curPos.next = L2;
                L2 = L2.next; // 前进指针
            }

            curPos = curPos.next; // 前进指针
        }

        // 多余尾部拼接
        curPos.next = L1 ? L1 : L2;

        // 输出结果
        return head.next;
    };

    // 个人练习: 链表合并
    const handleCpuMergeListNodeTest = (L1, L2) => {
        let head = new ListNode();
        let curPos = head;

        while (L1 && L2) {
            if (L1 < L2) {
                curPos.next = L1;
                L1 = L1.next;
            } else {
                curPos.next = L2;
                L2 = L2.next;
            }

            curPos = curPos.next;
        }

        curPos.next = L1 ? L1 : L2;

        return head.next;
    };

    /**
     * 链表节点删除( 等待笔记 )
     * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
     *      a) 注意: 是删除"排序"链表
     */
    const sort = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: null,
            },
        },
    };

    // 参考版本
    const deleteDuplicates = function (head) {
        // 设定 cur 指针，初始位置为链表第一个结点
        let cur = head;
        // 遍历链表
        while (cur != null && cur.next != null) {
            // 若当前结点和它后面一个结点值相等（重复）
            if (cur.val === cur.next.val) {
                // 删除靠后的那个结点（去重）
                cur.next = cur.next.next;
            } else {
                // 若不重复，继续遍历
                cur = cur.next;
            }
        }
        return head;
    };

    // 个人版本
    const handleCpuDeleteListNode = (head) => {
        let curPos = head;
        while (curPos && curPos.next) {
            if (curPos.val === curPos.next.val) {
                curPos.next = curPos.next.next;
            } else {
                curPos = curPos.next;
            }
        }
        return head;
    };

    /**
     * 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字( 等待笔记 )
     *      a) 注意: 排序链表有可能长度为0，或者1
     *      b) 解析: dummy节点 - 增加一个中介
     */

    const moreSort = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 4,
                                next: {
                                    val: 5,
                                    next: null,
                                },
                            },
                        },
                    },
                },
            },
        },
    };

    // 参考版本
    const deleteMoreDuplicates = function (head) {
        // 极端情况：0个或1个结点，则不会重复，直接返回
        if (!head || !head.next) {
            return head;
        }
        // dummy 登场
        let dummy = new ListNode();
        // dummy 永远指向头结点
        dummy.next = head;
        // cur 从 dummy 开始遍历
        let cur = dummy;
        // 当 cur 的后面有至少两个结点时
        while (cur.next && cur.next.next) {
            // 对 cur 后面的两个结点进行比较
            if (cur.next.val === cur.next.next.val) {
                // 若值重复，则记下这个值
                let val = cur.next.val;
                // 反复地排查后面的元素是否存在多次重复该值的情况
                while (cur.next && cur.next.val === val) {
                    // 若有，则删除
                    cur.next = cur.next.next;
                }
            } else {
                // 若不重复，则正常遍历
                cur = cur.next;
            }
        }
        // 返回链表的起始结点
        return dummy.next;
    };

    // 个人版本
    const handleCpuDeleteMoreListNode = (head) => {
        // 防止数据缺失
        if (!head || !head.next) {
            return head;
        }

        let dummy = new ListNode(); // 解法: 核心
        dummy.next = head;
        let curPos = dummy;

        // 因为至少要对比二次，故必须保证数据存在
        while (curPos && curPos.next && curPos.next.next) {
            if (curPos.next.val === curPos.next.next.val) {
                let val = curPos.next.val;

                // 循环检测重复，因为可能有2个以上重复数据
                while (curPos.next && curPos.next.val === val) {
                    curPos.next = curPos.next.ext;
                }
            } else {
                curPos = curPos.next;
            }
        }

        return dummy.next;
    };

    /**
     * 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点( 等待笔记 )
     *      a) 解析: 快慢指针
     *          0. 参考图例
     *          1. 快指针先走，与慢指针保持n个距离
     *          2. 快慢指针保持n个距离后, 在一起走
     *          3. 等快指针到尾部,那么慢指针即可做删除操作
     */

    const deleteList = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null,
                    },
                },
            },
        },
    };

    // 参考版本
    const removeNthFromEnd = function (head, n) {
        // 初始化 dummy 结点
        const dummy = new ListNode();
        // dummy指向头结点
        dummy.next = head;
        // 初始化快慢指针，均指向dummy
        let fast = dummy;
        let slow = dummy;

        // 快指针闷头走 n 步
        while (n !== 0) {
            fast = fast.next;
            n--;
        }

        // 快慢指针一起走
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        // 慢指针删除自己的后继结点
        slow.next = slow.next.next;
        // 返回头结点
        return dummy.next;
    };

    // 个人版本
    const handleCpuDeleteEndList = (head, n) => {
        const dummy = new ListNode();
        dummy.next = head;

        let slow = dummy.next;
        let fast = dummy.next;

        // 快指针先走，目的与慢指针保持n个距离
        while (n > 0) {
            fast = fast.next;
            n--;
        }

        // 保持n个距离后，快慢指针一起走
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        // 删除目标
        slow.next = fast;

        // 输出结果
        return dummy.next;
    };

    /**
     * 真题: 链表的反转( 等待笔记 )
     *      a) 解析: 3个指针
     *          0. 上一个( 左 ), 当前( 中 ), 下一个( 右 )
     *          1. 反转玩法: 中 --> 左 --> 右
     *          2. 依照此玩法，遍历一遍即可反转
     */

    const reverseList1 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null,
                    },
                },
            },
        },
    };
    const reverseList2 = {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null,
                    },
                },
            },
        },
    };

    // 参考版本
    const reverseListfun = function (head) {
        // 初始化前驱结点为 null
        let pre = null;
        // 初始化目标结点为头结点
        let cur = head;
        // 只要目标结点不为 null，遍历就得继续
        while (cur !== null) {
            // 记录一下 next 结点
            let next = cur.next;
            // 反转指针
            cur.next = pre;
            // pre 往前走一步
            pre = cur;
            // cur往前走一步
            cur = next;
        }
        // 反转结束后，pre 就会变成新链表的头结点
        return pre;
    };

    // 个人版本
    const handleCpuReverseList = (head) => {
        const dummy = new ListNode();
        dummy.next = head;

        let left = null;
        let center = head;

        while (center !== null) {
            let right = center.next;

            // 核心步骤: 位置替换
            center.next = left; // center指向left
            left = center; // left替换为center
            center = right; // center替换为right
        }

        return left;
    };

    console.log("<--------- 分割线 --------->");
    return (
        <div className="base-linked-list-5">
            <h2>真题: 合并二个有序链表, </h2>
            {/* {console.log("参考版本 :>> ", mergeTwoLists(list1, list2))} */}
            {console.log("个人版本 :>> ", handleCpuMergeListNode(list1, list2))}
            {console.log(
                "个人版本Test :>> ",
                handleCpuMergeListNodeTest(list1, list2)
            )}
            <h2>
                真题:
                给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次(
                删除链表节点 )
            </h2>
            {console.log("参考版本 :>> ", deleteDuplicates(sort))}
            {console.log("个人版本 :>> ", handleCpuDeleteListNode(sort))}
            <h2>
                真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中
                没有重复出现的数字
            </h2>
            {console.log("参考版本 :>> ", deleteMoreDuplicates(moreSort))}
            {console.log(
                "个人版本 :>> ",
                handleCpuDeleteMoreListNode(moreSort)
            )}
            <h2>
                真题描述：给定一个链表，删除链表的倒数第 n
                个结点，并且返回链表的头结点
            </h2>
            {console.log("参考版本 :>> ", removeNthFromEnd(deleteList, 2))}
            {console.log(
                "个人版本 :>> ",
                handleCpuDeleteEndList(deleteList, 2)
            )}
            <h2>真题: 链表的反转</h2>
            {console.log("参考版本 :>> ", reverseListfun(reverseList1))}
            {console.log("个人版本 :>> ", handleCpuReverseList(reverseList2))}
        </div>
    );
};

export default BaseLinkedList5;
