/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (69.57%)
 * Likes:    987
 * Dislikes: 0
 * Total Accepted:    180.5K
 * Total Submissions: 259.4K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let pre = 0,
      i = 0
  const build = function (stop ?: number) {
    if (inorder[i] !== stop) {
      const root = new TreeNode(preorder[pre++])
      root.left = build(root.val)
      i++
      root.right = build(stop)
      return root
    }
    return null
  }
  return build()
};


// 50

/*
https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/
1. 递归，通过前序的特点，找到根节点，然后在去找左右子树
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null
  const root = new TreeNode(preorder[0])
  const mid = inorder.indexOf(preorder[0])
  const leftPreOrder = preorder.slice(1, mid + 1),
        rightPreOrder = preorder.slice(mid + 1),
        leftInOrder = inorder.slice(0, mid),
        rightInOrder = inorder.slice(mid + 1)
  root.left = buildTree(leftPreOrder, leftInOrder)
  root.right = buildTree(rightPreOrder, rightInOrder)
  return root
};
1.1 性能优化，每次只需要传指针就够了
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  function helper(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd) return null
    let rootVal = preorder[preStart],
        root = new TreeNode(rootVal),
        mid = inorder.indexOf(rootVal),
        leftNum = mid - inStart;
    root.left = helper(preStart + 1, preStart + leftNum, inStart, mid - 1)
    root.right = helper(preStart + leftNum + 1, preEnd, mid + 1, inEnd)
    return root
  }
  return helper(0, preorder.length - 1, 0 , inorder.length - 1)
};

1.2 hash存储， 加快 indexOf 的速度，空间换时间
2. without map的神奇思路
* 变量 pre 保存当前要构造的树的 root
* 变量 in 保存 inorder 数组中可以成为 root 的数字们的开头那个
* 对于当前要构造的树，有一个停止点 stop ，inorder 数组中第 in 项到第 stop 项是要构造的树的节点值们
* 每次递归调用，都会确定出一个停止点，它告诉了子调用在哪里停止，把自己的根节点值作为左子树调用的停止点，自己的（父调用给下来的）停止点作为右子树的停止点


*/
// @lc code=end

