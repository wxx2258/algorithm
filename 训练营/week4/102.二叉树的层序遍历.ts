/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (64.23%)
 * Likes:    847
 * Dislikes: 0
 * Total Accepted:    293.9K
 * Total Submissions: 457.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层序遍历结果：
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
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

function levelOrder(root: TreeNode | null): number[][] {
  const res = []
  dfs(0, root)
  return res
  function dfs(level: number, node: TreeNode) {
    if (node === null) return
    if (!res[level]) res[level] = []
    res[level].push(node.val)
    dfs(level + 1, node.left)
    dfs(level + 1, node.right)
  }
};

// 50

/*
1. 广度优先
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []
  const queue = [root]
  const res = []
  while(queue.length) {
    const oldLen = queue.length
    const level = []
    for (let i = 0; i < oldLen; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(level)
  }
  return res
};
2. 深度递归优先
*/
// @lc code=end

