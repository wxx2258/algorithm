/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (66.90%)
 * Likes:    1076
 * Dislikes: 0
 * Total Accepted:    185.7K
 * Total Submissions: 277.4K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * 
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出：3
 * 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出：5
 * 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1,2], p = 1, q = 2
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [2, 10^5] 内。
 * -10^9 
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || root.val === p.val || root.val === q.val) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (left && right) return root
  return left ? left : right
};

// 60

/*
1. 中序遍历，递归设置两个标记位，最近公共祖先为其最近都遍历到的值
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let res = null
  function dfs(root: TreeNode | null) {
    if (root === null) return false
    const leftSon = dfs(root.left)
    const rightSon = dfs(root.right)
    if ((leftSon && rightSon) || 
        ((root.val === p.val || root.val === q.val) && (leftSon || rightSon))) {
      res = root
    }
    return leftSon || rightSon || (root.val === p.val || root.val === q.val)
  }
  dfs(root)
  return res
};
1.1 优雅代码
* 从根节点遍历，递归向左右子树查询节点信息
* 递归终止条件：如果当前节点为空或等于 p 或 q，则返回当前节点

* 递归遍历左右子树，如果左右子树查到节点都不为空，则表明 p 和 q 分别在左右子树中，因此，当前节点即为最近公共祖先；
* 如果左右子树其中一个不为空，则返回非空节点。
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if(!root || root === p || root === q) return root; // 根节点就是p或q
  const left = lowestCommonAncestor(root.left, p , q) // 在左子树中找
  const right = lowestCommonAncestor(root.right, p, q) // 在右子树中找
  if (left && right) return root // 如果一个出现在坐边，一个出现在右边，最近是root
  return left ? left : right // 如果都出现在一边，则某一边就是最近公共祖先
};
2. 记录路径 存储父节点

*/
// @lc code=end

