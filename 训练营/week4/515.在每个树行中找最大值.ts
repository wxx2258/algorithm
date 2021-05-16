/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (63.73%)
 * Likes:    128
 * Dislikes: 0
 * Total Accepted:    28K
 * Total Submissions: 43.9K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 您需要在二叉树的每一行中找到最大的值。
 * 
 * 示例：
 * 
 * 
 * 输入: 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \  
 * ⁠     5   3   9 
 * 
 * 输出: [1, 3, 9]
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

function largestValues(root: TreeNode | null): number[] {
  let maxValues = []
  dfs(0, root)
  return maxValues
  function dfs(level: number, node: TreeNode | null) {
    if (node === null) return
    if (maxValues[level] === undefined || maxValues[level] < node.val) {
      maxValues[level] = node.val
    }
    dfs(level + 1, node.left)
    dfs(level + 1, node.right)
  }
};


// 80 


/*
1. 广度遍历 ： 比较适合广度遍历，在每层遍历的时候去找到最大值
function largestValues(root: TreeNode | null): number[] {
  if (root === null) return []
  const queue = [root]
  const maxValues = []
  while (queue.length) {
    let currentLevelLen = queue.length
    let temp = -Infinity
    for (let i = 0; i < currentLevelLen; i++) {
      const node = queue.shift()
      if (temp < node.val) temp = node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    maxValues.push(temp)
  }
  return maxValues
};
2. 深度遍历： 记录层数，每次在层数跟当前值比较
function largestValues(root: TreeNode | null): number[] {
  let maxValues = []
  dfs(0, root)
  return maxValues
  function dfs(level: number, node: TreeNode | null) {
    if (node === null) return
    if (maxValues[level] === undefined || maxValues[level] < node.val) {
      maxValues[level] = node.val
    }
    dfs(level + 1, node.left)
    dfs(level + 1, node.right)
  }
};
*/
// @lc code=end

