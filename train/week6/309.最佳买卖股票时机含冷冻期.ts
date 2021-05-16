/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (58.34%)
 * Likes:    769
 * Dislikes: 0
 * Total Accepted:    88.7K
 * Total Submissions: 150.7K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * 
 * 
 * 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 
 * 
 * 示例:
 * 
 * 输入: [1,2,3,0,2]
 * 输出: 3 
 * 解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 * 
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  if (prices === null || prices.length === 0) return 0
  const len = prices.length
  const dp = new Array(len)
  dp[0] = [0, -prices[0]]
  for (let i = 1; i < len; i++) {
    dp[i] = new Array(2)
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], (i >= 2 ? dp[i - 2][0] : 0) - prices[i])
  }
  return dp[len - 1][0]
};

// 50

/*
1. DP方程
a. 子问题
这里相对之前的问题，有冷冻期。即如果前一天是卖出，则今天不能买入

不持有股票：之前持有卖出当前的股票且今天不买，之前不持有不操作
持有股票： 前一天（冷冻期）之前没有现在买当前的股票，之前持有不操作

b. 状态空间
dp[i][k][0, 1]
dp[i][0, 1]
=》
dp_i0
dp_i1
dp_pre

c. dp方程
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 2][k - 1][0] - prices[i])
            = Math.max(dp[i - 1][k][1], dp[i - 2][k][0] - prices[i])

k变量无关，简化
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])

dp_i0 = Math.max(dp_i0, dp_i1 + prices[i])
dp_i1 = Math.max(dp_i0, dp_pre - prices[i])

function maxProfit(prices: number[]): number {
  let dp_i0 = 0, dp_i1 = -prices[0], dp_pre = 0
  for (let i = 0; i < prices.length; i++) {
    let temp = dp_i0
    dp_i0 = Math.max(dp_i0, dp_i1 + prices[i])
    dp_i1 = Math.max(dp_i1, dp_pre - prices[i])
    dp_pre = temp
  }
  return dp_i0
};

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/qian-duan-shi-tang-ti-jie-chao-hao-li-ji-gpb4/
*/
// @lc code=end

