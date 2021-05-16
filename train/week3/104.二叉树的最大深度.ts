/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (76.01%)
 * Likes:    850
 * Dislikes: 0
 * Total Accepted:    391.1K
 * Total Submissions: 514.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while(queue.length) {
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)      
    }
    if (queue.length) depth += 1
  }
  return depth;
};


// 50 

/*
1. 深度优先递归
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
2. 广度优先遍历
function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1;
  while(queue.length) {
    const levelSize = queue.length
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)      
    }
    if (queue.length) depth += 1
  }
  return depth;
};
*/
// @lc code=end

