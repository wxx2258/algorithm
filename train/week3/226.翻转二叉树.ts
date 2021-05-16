/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (78.27%)
 * Likes:    822
 * Dislikes: 0
 * Total Accepted:    219.8K
 * Total Submissions: 280.8K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 翻转一棵二叉树。
 * 
 * 示例：
 * 
 * 输入：
 * 
 * ⁠    4
 * ⁠  /   \
 * ⁠ 2     7
 * ⁠/ \   / \
 * 1   3 6   9
 * 
 * 输出：
 * 
 * ⁠    4
 * ⁠  /   \
 * ⁠ 7     2
 * ⁠/ \   / \
 * 9   6 3   1
 * 
 * 备注:
 * 这个问题是受到 Max Howell 的 原问题 启发的 ：
 * 
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if(root === null) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left
  return root
};


// 50 

/*
1.  递归
function invertTree(root: TreeNode | null): TreeNode | null {
  recursion(root)
  return root
  function recursion(node: TreeNode | null) {
    if (root === null) return 
    [root.left, root.right] = [root.right, root.left]
    invertTree(root.left)
    invertTree(root.right)
  }
};

1.1 递归优化，不借助辅助函数
function invertTree(root: TreeNode | null): TreeNode | null {
  if(root === null) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.left = right
  root.right = left
  return root
};

*/
// @lc code=end

