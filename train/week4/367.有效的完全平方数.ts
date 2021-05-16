/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (43.66%)
 * Likes:    207
 * Dislikes: 0
 * Total Accepted:    60.6K
 * Total Submissions: 138.7K
 * Testcase Example:  '16'
 *
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num = 16
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num = 14
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  if (num < 2) return true
  let left = 0, right = num
  while (left <= right) {
    let mid = (left + right) >> 1
    if (mid * mid === num) {
      return true
    } else if (mid * mid > num) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
};

// 50
/*
1. 暴力查找
2. 二分查找

*/
// @lc code=end

