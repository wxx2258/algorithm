/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
 *
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (54.41%)
 * Likes:    544
 * Dislikes: 0
 * Total Accepted:    76.9K
 * Total Submissions: 141.3K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 /
 * 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode
 * 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中结点数在范围 [0, 10^4] 内
 * -1000 
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const queue = [root]
  let res = []

  while(queue.length) {
    const node = queue.shift()
    if (node) {
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else [
      res.push('X')
    ]
  }
  return res.join(',')
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data === 'X') return null
  const list = data.split(',')
  const root = new TreeNode(+list[0])
  const queue = [root]
  let cursor = 1

  while(cursor < list.length) {
    const node = queue.shift()
    const leftVal = list[cursor]
    const rightVal = list[cursor + 1]

    if (leftVal !== 'X') {
      const leftNode = new TreeNode(+leftVal)
      node.left = leftNode
      queue.push(leftNode)
    }
    if (rightVal !== 'X') {
      const rightNode = new TreeNode(+rightVal)
      node.right = rightNode
      queue.push(rightNode)
    }
    cursor += 2
  }

  return root
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// 50

/*
1. 深度遍历 DFS 
function serialize(root: TreeNode | null): string {
  if (root === null) return 'X'
  
  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right)
};
function deserialize(data: string): TreeNode | null {
  const list: string[] = data.split(',')
  const buildTree = (list)=> {
    const rootVal = list.shift()
    if (rootVal === 'X') {
      return null
    }
    const root = new TreeNode(rootVal)
    root.left = buildTree(list)
    root.right = buildTree(list)
    return root
  }
  return buildTree(list)
};
2. BFS

*/


// @lc code=end

