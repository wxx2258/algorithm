/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (37.42%)
 * Likes:    635
 * Dislikes: 0
 * Total Accepted:    175.1K
 * Total Submissions: 467.6K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，x^n）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = 2.10000, n = 3
 * 输出：9.26100
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -100.0 
 * -2^31 
 * -10^4 
 * 
 * 
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  // return n % 2 ? x * myPow(x, (n - 1) / 2) *  myPow(x, (n - 1) / 2): myPow(x, n / 2) * myPow(x, n / 2)
  return n % 2 ? x * myPow(x * x, (n - 1) / 2) : myPow(x * x, n / 2)
};

// 50

/*
1. 快速幂 递归
function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  return n % 2 ? x * myPow(x * x, (n - 1) / 2) : myPow(x * x, n / 2)
};
2. 迭代
function myPow(x: number, n: number): number {
  let sum = 1
  let flag = false
  if (n < 0) {
    n = -n,
    flag = true
  }
  while (n) {
    if (n % 2) {
      sum *= x
    };
    x *= x
    n = Math.floor(n / 2)
  }
  return flag ? 1 / sum : sum
};
*/
// @lc code=end

