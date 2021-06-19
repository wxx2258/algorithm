
持续总结中

# 序言

# 数据结构
## 线性结构
### 数组
理解较为简单，需要知道是其与链表的主要区别

| 操作 | 插入 | 删除 | 查找 |
| --- | --- | --- | --- |
| 数组 | O(n) | O(n) | O(1) |
| 链表 | O(1) | O(1) | O(n) |

关于数组相关问题的优化，主要有两种思路：
1. 空间换时间，借助hash，栈等其他数据结构减少遍历次数
* [1.两数之和](https://github.com/wxx2258/algorithm/blob/master/train/week1/1.%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.js)


2. 单指针遍历变双指针遍历，减少遍历次数
* [15.三数之和](https://github.com/wxx2258/algorithm/blob/master/train/week1/15.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.ts)
* [11.盛最多的水](https://github.com/wxx2258/algorithm/blob/master/train/week1/11.%E7%9B%9B%E6%9C%80%E5%A4%9A%E6%B0%B4%E7%9A%84%E5%AE%B9%E5%99%A8.ts)
* [88.合并两个有序的数组](https://github.com/wxx2258/algorithm/blob/master/train/week1/88.%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84.ts)
* [26.删除有序数组中的重复项](https://github.com/wxx2258/algorithm/blob/master/train/week1/26.%E5%88%A0%E9%99%A4%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.ts)

### 链表

```js
 class ListNode {
     val: number
     pre: ListNode | null
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.pre = (pre===undefined ? null : next)
         this.next = (next===undefined ? null : next)
     }
 }
```

关于链表，主要是一些操作以及对链表的优化：
1. 双向链表
2. 环形链表
* [141.环形链表](https://github.com/wxx2258/algorithm/blob/master/train/week1/141.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8.ts)
* [142.环形链表-ii ](https://github.com/wxx2258/algorithm/blob/master/train/week1/142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8-ii.ts)
3. 链表操作
* [206.反转链表](https://github.com/wxx2258/algorithm/blob/master/train/week1/206.%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8.ts)
* [21.合并两个有序链表](https://github.com/wxx2258/algorithm/blob/master/train/week1/21.%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E9%93%BE%E8%A1%A8.ts)
* [24.两两交换链表中的节点.ts](https://github.com/wxx2258/algorithm/blob/master/train/week1/24.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.ts)


#### 跳表【只做了解】
* 优化有序链表的查询效率，从一维升为多维。

* 插入/删除/搜索 都是 O(log n) 

### 栈，队列

| 数据结构 | 特征 |
| --- | --- |
| 栈 | 先入后出 |
| 队列 | 先入先出 |

栈在一些两两匹配的场景尤其适合：
* 


### hash表

### 并查集

## 树
### 二叉树

### 二叉搜索树

### 堆


### 字典树

### AVL树

### 红黑树

### 图

# 算法
## 递归

## 分治与回溯

## 搜索
### BFS 与 DFS

### 双向BFS

### 启发式搜索

## 贪心

## 二分查找

## 动态规划

## 位运算

## 排序

# 做题思路总结
