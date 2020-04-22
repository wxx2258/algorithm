/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;
    let preNode = head;
    let nextNode = head.next;

    preNode.next = swapPairs(nextNode.next);
    nextNode.next = preNode;
    return nextNode;
};
// 解题思路
/**
 * 首先先把最小问题解决了，相邻节点两两交换。
    * a->b->c
    * a->c
    * b->a
    * b->a->c
 * 递归：找到如何分解问题。
    * 可以这么理解，在a->c中，其实c其中其实也是函数swapPairs的一个解
 */

var swapPairs2 = function(head) {
    if(head === null || head.next === null) return head;
    let dummyHead = p = new ListNode();
    let preNode, nextNode;

    dummyHead.next = head;
    while((preNode = p.next) && (nextNode = p.next.next)) {
        preNode.next = nextNode.next;
        nextNode.next = preNode;
        p.next = nextNode;
        p = preNode;
    }
    return dummyHead.next;
};
// 解题思路
/**
 * 迭代大法好，通过指针，遍历迭代。
 * 首先先把最小问题解决了，相邻节点两两交换。
    * a->b->c
    * a->c
    * b->a
    * b->a->c
 * 思考迭代指针如何设计：
    * 指针p，每次判断p.next和p.next.next是否为空，为空则已经到链表尾部
 */
