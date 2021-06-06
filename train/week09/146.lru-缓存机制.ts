/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 *
 * https://leetcode-cn.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (52.49%)
 * Likes:    1435
 * Dislikes: 0
 * Total Accepted:    177.3K
 * Total Submissions: 337.7K
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
 * 
 * 
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value)
 * 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 0 
 * 最多调用 3 * 10^4 次 get 和 put
 * 
 * 
 */

// @lc code=start
class LinkNode {
    public key: number
    public val: number
    public prev: LinkNode | null // 注意节点创建时，前驱节点可能是null
    public next: LinkNode | null // 注意节点创建时，后置节点可能是null
    constructor (key: number, val: number) {
        this.key = key;
        this.val = val;
    }
}

// LRU 缓存策略
class LRUCache {
    size: number = 0 // 总容量大小
    curLen: number = 0 // 当前已装载数
    dummyHead: LinkNode // 哨兵头节点
    dummyNail: LinkNode // 哨兵尾节点
    hashMap: { [key : number]: LinkNode } = {}
    constructor(capacity: number) {
        // 设置总容量
        this.size = capacity;

        // 创建两个初始哨兵节点
        this.dummyHead = new LinkNode(-1, -1);
        this.dummyNail = new LinkNode(-1, -1);

        // 先构成一个双向链表结构
        this.dummyHead.next = this.dummyNail;
        this.dummyHead.prev = this.dummyNail;
        this.dummyNail.next = this.dummyHead;
        this.dummyNail.prev = this.dummyHead;
    }

    get(key: number): number {
        let node = this.hashMap[key];
        if (node) { // 如果hash表存在节点
            this.moveNodeToHead(node); // 访问节点，将节点提到头节点
            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        let node = this.hashMap[key];
        if (node) { // 如果已经存在节点
            this.moveNodeToHead(node); // 访问节点，将节点提到头节点
            node.val = value; // 更新val
        } else {
            node = new LinkNode(key, value); // 创建节点
            if (this.curLen === this.size) { // 如果满载
                let rmNode = this.removeLastNode(); // 移除最少访问（最后的）节点
                delete this.hashMap[rmNode.key]; // 删除引用key 
            }
            this.addNode(node);
            this.hashMap[key] = node;
        }
    }

    // 把节点移动双链表头部
    moveNodeToHead (node: LinkNode) {
        this.removeNode(node); // 先移除
        this.addNode(node); // 再加入头部
    }

    // 移除指定节点
    removeNode (node: LinkNode): LinkNode {
        let prev = node.prev; // 拿到当前node前驱节点
        let next = node.next; // 拿到当前node后置节点

        prev.next = next; // 将node前置节点，直接指向node后置节点
        next.prev = prev; // 将node后置节点, 直接指向node前置节点

        node.prev = null; // 删除当前node prev引用
        node.next = null; // 删除当前node next引用

        this.curLen--;

        return node;
    }

    // 添加指定节点到头部
    addNode (node: LinkNode) {
        let oldHead = this.dummyHead.next; // 缓存老的头节点
        this.dummyHead.next = node; // 把当前节点作为新的头节点
        node.prev = this.dummyHead; // 把当前节点prev指向虚拟头节点
        node.next = oldHead; // 把当前节点next指向老头节点
        oldHead.prev = node; // 老头节点prev指回新头节点
        this.curLen++;
    }

    // 移除少使用的节点（最后）
    removeLastNode (): LinkNode {
        let last = this.dummyNail.prev; // 尾节点
        return this.removeNode(last);
    }
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/*
https://leetcode-cn.com/problems/lru-cache/solution/typescript-shi-xian-lruhuan-cun-ji-zhi-q-7is1/
*/
// @lc code=end

