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
var reverseList = function(head) {
    let reverse = function(pre, cur){
        if (!cur) return pre;
        let nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
        return reverse(pre, cur);
    }
    return reverse(null, head);
};
// 解题思路
/**
 * 递归：
 * 思路与迭代法类似，只是把迭代的过程使用递归去处理了
 */


var reverseList2 = function(head) {
    let pre = null;
    let cur = head;
    while(cur) {
        let nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
    }
    return pre;
};
// 解题思路
/**
 * 迭代法：
 * 链表反转：
    1. 遍历链表，判断当前遍历cur节点是否为null，则停止遍历
    2. 将当前节点cur的next节点，存储到临时变量nextTemp中，然后将当前cur节点next指向它的上一个节点pre
    3. 将cur赋值给pre节点，作为当前cur节点的上一个节点
    4. 节点cur赋值为临时变量nextTemp，指针向后移动一位。继续2步骤
    5. 当指针移动到最后一个节点，则为null，退出遍历，此时pre存储就是头节点。则整个链表
 */