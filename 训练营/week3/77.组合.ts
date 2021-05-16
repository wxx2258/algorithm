/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.68%)
 * Likes:    558
 * Dislikes: 0
 * Total Accepted:    154.1K
 * Total Submissions: 201K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const res = []
  recursion(1, [])
  return res
  function recursion(start: number ,path: number[]) {
    if (path.length === k) {
      res.push(path)
      return
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      recursion(i + 1, path)
      path.pop()      
    }
  }
};

// 50 
/*
1. 拆解问题递归，每次遍历两种结果，选择或者不选择
function combine(n: number, k: number): number[][] {
  let res = []
  recursion(1, [])
  return res
  function recursion(currentVal: number, currentCombine: number[]) {
    if (currentCombine.length === k) {
      res.push(currentCombine)
      return
    }
    if (currentVal > n) return

    recursion(currentVal + 1, [...currentCombine, currentVal])
    recursion(currentVal + 1, [...currentCombine])
  }
};
2. 拆解问题递归，递归的子树每次从 start - n
*/

// @lc code=end

