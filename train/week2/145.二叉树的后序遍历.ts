/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Medium (74.30%)
 * Likes:    561
 * Dislikes: 0
 * Total Accepted:    212.1K
 * Total Submissions: 285.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
    let nums = [];
    let stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        root = stack.pop();
        if (root) {
            stack.push(root);
            stack.push(null); // 标记位
            root.right && stack.push(root.right);
            root.left && stack.push(root.left);
        } else {
            nums.push(stack.pop().val);
        }
    }
    return nums;
};

// 60%

/*
1. 递归
2. 迭代
* 后序遍历与前序遍历不同的是：
* 后序遍历是左右根
* 而前序遍历是根左右
* 如果我们把前序遍历的 list.push(node.val) 变更为 list.unshift(node.val) （遍历结果逆序），那么遍历顺序就由 根左右 变更为 右左根
function postorderTraversal(root: TreeNode | null): number[] {
  const res = []
  const stack = []
  if(root) stack.push(root)
  while(stack.length) {
    root = stack.pop()
    res.unshift(root.val)
    if (root.left !== null) stack.push(root.left)
    if (root.right !== null) stack.push(root.right)
  }
  return res
};
2.1 代码优化版本，更加简明


*/
// @lc code=end

