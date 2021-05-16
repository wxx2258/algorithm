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
function climbStairs(n: number): number {
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

// 60%
/*
3. 动态规划
a. 找到重复子问题
* 每次只能走1步或者2步，第n步的结果就是 第n-1步的结果 + 第n-2步的结果
b. 定义状态空间
* dp[i]
c. 定义动规方程式
* dp[i] = dp[i - 1] + dp[i - 2]

function climbStairs(n: number): number {
  let dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
这里可以进一步优化空间 pre cur
function climbStairs(n: number): number {
  let pre = 0, cur = 1
  for (let i = 1; i <= n; i++) {
    let temp = cur
    cur += pre
    pre = temp
  }
  return cur
};


基本情况分析 f(n) = f(n-1) + f(n-2)
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

