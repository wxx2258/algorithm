/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (47.26%)
 * Likes:    487
 * Dislikes: 0
 * Total Accepted:    205.2K
 * Total Submissions: 433.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明：叶子节点是指没有子节点的节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数的范围在 [0, 10^5] 内
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

function minDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0
  } else if (root.left == null) {
    return minDepth(root.right) + 1;
  } else if (root.right == null) {
    return minDepth(root.left) + 1;
  } else{
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }    
};


//50 


/*
1. 深度优先
function minDepth(root: TreeNode | null): number {
  if (root === null) return 0
  if (root.left === null && root.right === null) {
    return 1
  }
  let minDepthVal = +Infinity
  if (root.left) {
    minDepthVal = Math.min(minDepth(root.left), minDepthVal)
  }
  if (root.right) {
    minDepthVal = Math.min(minDepth(root.right), minDepthVal)
  }
  return minDepthVal + 1
};
1.1 更优雅的递归
function minDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0
  } else if (root.left == null) {
    return minDepth(root.right) + 1;
  } else if (root.right == null) {
    return minDepth(root.left) + 1;
  } else{
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }    
};

2. 广度优先
*/
// @lc code=end

