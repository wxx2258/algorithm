/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (43.09%)
 * Likes:    1257
 * Dislikes: 0
 * Total Accepted:    224.9K
 * Total Submissions: 518.9K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 * 
 * 示例 2：
 * 
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：coins = [1], amount = 1
 * 输出：1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：coins = [1], amount = 2
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};


// 50

/*
1. 递归 分治
sub(i) = Math.min(sub(i - coin[0]), sub(i - coin[1]), sub(i - coin[2]))
if (i - coin[k] < 0) return 0 
if (i - coin[k] === 0) return 1
sub(coin[k]) = 1

2. 动态规划
a. 分治找到子问题
sub(i) = Math.min(sub(i - coin[0]), sub(i - coin[1]), sub(i - coin[2]))
b. 定义状态空间
dp[i]
c. 定义DP方程
dp[coin[k]] = 1
dp[i] = Math.min(dp[i - coin[0]], dp[i - coin[1], ....])

function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
};

3. 贪心算法
sub(i) = sub(i - coin[k]) 每次都先取coin[k]最大，然后取coin[k]第二大
* 如果顺利，可以更块的找到结果
*（本质上还是记忆化搜索，在这基础上加快搜索）
function coinChange(coins: number[], amount: number): number {
  coins = coins.sort((a, b)=> b - a)
  let res = Infinity
  search(amount, 0, 0)
  return res === Infinity ? -1 : res
  function search(amount, index, count) {
    // 这里的amount不会出现负数的情况，因为这里贪心的思想是 amount - 最多币数
    if (amount === 0) {
      res = Math.min(res, count)
      return
    }
    if (index === coins.length) return
    // count + num < res && num >= 0 剪枝 如果已经比已知情况的硬币数还多，无需进入
    for (let num = amount / coins[index] | 0; count + num < res && num >= 0; num--) {
      search(amount - num * coins[index], index + 1, count + num)
    }
  }
};
*/

// @lc code=end

