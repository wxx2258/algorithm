/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.62%)
 * Likes:    1571
 * Dislikes: 0
 * Total Accepted:    404.4K
 * Total Submissions: 782.5K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
function climbStairs(n: number, fn_2 = 0, fn_1 = 1): number {
  if (n === 0) return fn_1
  return climbStairs(n - 1, fn_1 , fn_2 + fn_1) 
  // 这里相当于 将 fn_2 + fn_1 赋值给后面
};

// 60%







/*
基本情况分析 f(n) = f(n-1) + f(n-2)
1.1 递归
function climbStairs(n: number): number {
  // 递归调用解决  超时了
  if (n === 1 || n === 0) return 1
  return climbStairs(n - 1) + climbStairs(n - 2)
};
1. 尾递归调用
function climbStairs(n: number, a1 = 1, a2 = 1): number {
  if (n === 1 || n === 0) return a1

  return climbStairs(n - 1, a2 + a1, a1)
};
2. 空间优化
function climbStairs(n: number): number {
  if (n == 1) return 1
  if (n == 2) return 2

  const hash = [1,2]
  for (let i = 2; i < n; i++) {
    hash[i] = hash[i - 1] + hash[i - 2]
  }
  return hash[n - 1]
};
空间再优化，用O（1）
*/

// @lc code=end

