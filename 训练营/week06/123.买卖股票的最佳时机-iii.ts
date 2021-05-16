/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (51.78%)
 * Likes:    764
 * Dislikes: 0
 * Total Accepted:    106.9K
 * Total Submissions: 205.1K
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入：prices = [3,3,5,0,0,3,1,4]
 * 输出：6
 * 解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
 * 随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [1,2,3,4,5]
 * 输出：4
 * 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。   
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：prices = [7,6,4,3,1] 
 * 输出：0 
 * 解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 示例 4：
 * 
 * 
 * 输入：prices = [1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let profit_1_in = -prices[0], profit_1_out = 0
  let profit_2_in = -prices[0], profit_2_out = 0
  let n = prices.length
  for (let i = 1; i < n; i++) {
      profit_2_out = Math.max(profit_2_out, profit_2_in + prices[i])
      profit_2_in = Math.max(profit_2_in, profit_1_out - prices[i])
      profit_1_out = Math.max(profit_1_out, profit_1_in + prices[i])
      profit_1_in = Math.max(profit_1_in, -prices[i])
  }
  return profit_2_out
};

// 50

/*
1. DP方程
a. 子问题
这里相对之前的问题，最多只能交易两笔，这样的话，交易次数产生了影响

不持有股票：卖出当前的股票且今天不买，之前不持有不操作
持有股票： 之前没有现在买当前的股票, [之前持有今天卖了再买，之前持有不操作]

b. 状态空间
dp[i][k][0, 1]

c. dp方程
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
这时候K无法简化
for (let i = 0; i < n; i++) {
    for (let k = maxK; k >= 1; k--) {
        dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
        dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
}

dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i])
dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i])
dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
            = Math.max(dp[i - 1][1][1], -prices[i])

链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/qian-duan-shi-tang-ti-jie-chao-hao-li-ji-gpb4/
*/
// @lc code=end

