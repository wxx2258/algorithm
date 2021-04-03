/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (69.33%)
 * Likes:    870
 * Dislikes: 0
 * Total Accepted:    241.7K
 * Total Submissions: 348.2K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 
 * 
 * 
 * 
 * 
 * 进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）
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

 function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while(cur.next !== null && cur.next.next !== null) {
    const node1 = cur.next
    const node2 = cur.next.next
    node1.next = node2.next
    node2.next = node1
    cur.next = node2

    cur = node1
  }
  return dummyHead.next
};

// 50%








/*
1. 遍历求解
* 在人为加上head、tail之后，这个链表的头、尾无论何时都一定存在，这样就可以不用去考虑那些麻烦的特殊情况（插入头、删除头等）了
function swapPairs(head: ListNode | null): ListNode | null {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead
  while(cur.next !== null && cur.next.next !== null) {
    const node1 = cur.next
    const node2 = cur.next.next
    node1.next = node2.next
    node2.next = node1
    cur.next = node2

    cur = node1
  }
  return dummyHead.next
};
2. 递归求解
function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  let next = head.next 

  head.next = swapPairs(next.next)
  next.next = head
  return next
};

3. stack求解
function swapPairs(head: ListNode | null): ListNode | null {
  let stack = []
  let cur = head
  let newHead = new ListNode(0)
  
  head = newHead
  while(cur !== null && cur.next !== null) {
    stack.unshift(cur)
    stack.unshift(cur.next)
    cur = cur.next.next

    newHead.next = stack.shift()
    newHead = newHead.next

    newHead.next = stack.shift()
    newHead = newHead.next
  }
  if (cur !== null) {
    newHead.next = cur
  } else {
    newHead.next = null
  }

  return head.next
};
*/
// @lc code=end

