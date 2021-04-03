/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (65.61%)
 * Likes:    1636
 * Dislikes: 0
 * Total Accepted:    524K
 * Total Submissions: 797.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let preHead = new ListNode(0)
  let head = preHead
  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      preHead.next = l1
      l1 = l1.next
    } else {
      preHead.next = l2
      l2 = l2.next   
    }
    preHead = preHead.next
  }
  preHead.next = l1 === null ? l2 : l1
  return head.next
};
//50%










/*
1. 递归，分解问题，找到最小重复问题
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2
  if (l2 === null) return l1
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  } else {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
};
2. 将递归换成迭代的方式 

 */

// @lc code=end

