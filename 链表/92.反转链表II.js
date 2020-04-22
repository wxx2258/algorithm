/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === n) {
        return head;
    }
    let preNode = null; // 反转区间的前一个节点
    let preSelect; // 反转区间的第一个节点
    let lastSelect; // 反转区间的最后一个节点
    let lastNode; // 反转区间的后一个节点

    for (let i = 1, currentNode = head; currentNode; i++) {
        if (i === m - 1) {
            preNode = currentNode;
        }
        if (i === m) {
            preSelect = currentNode;
        }
        if (i === n) {
            lastSelect = currentNode;
            lastNode = currentNode.next;
        }
        currentNode = currentNode.next;
    }
    // console.log("reverseBetween -> preNode", preNode)
    // console.log("reverseBetween -> preSelect", preSelect)
    // console.log("reverseBetween -> lastSelect", lastSelect)
    // console.log("reverseBetween -> lastNode", lastNode)
    
    let pre = null;
    let cur = preSelect;
    for(let i = 0; i <= n - m; i++) {
        // 对反转区间进行一次反转操作
        let nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
        // console.log("reverseBetween -> cur", pre)
    }
    preSelect.next = lastNode; // 经过反转preSelect已经是反转区间的最后一个节点，将next与lastNode连接
    if (preNode) {
        preNode.next = pre; // preNode与 反转后的区间进行连接
    } else {
        head = pre;
    }

    return head;
};
// 解题思路
/**
 * 反转链表的升级版，只不过是多了两个步骤
 * 一个是找出需要反转的区间，并进行反转；存储反转区间前后的节点，最后将反转区间和前后节点连接起来
 */