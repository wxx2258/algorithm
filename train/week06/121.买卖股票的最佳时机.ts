/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (56.55%)
 * Likes:    1604
 * Dislikes: 0
 * Total Accepted:    436.1K
 * Total Submissions: 769.5K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * ⁠    注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
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
  const dp = []
  for (let i = 0; i < prices.length; i++) {
    dp.push(new Array(2))
  }
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
  }
  return dp[prices.length - 1][0]
};

// 50

/*
1. 暴力循环，找出所有的区间差，取最大值

2. 贪心算法
每次都找局部最优解，找到最大利润区间。
前面的最低点和当前点就是当前的利润空间，再和已知的利润空间比较，找到最大利润空间
function maxProfit(prices: number[]): number {
  let minPrice = +Infinity
  let maxP = 0
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxP = Math.max(maxP, prices[i] - minPrice)
  }
  return maxP
};

3. 动态规划
a. 子问题 
每天面临三种选择，持有股票，卖掉股票，不操作
如果今天不持有股票，说明卖掉或者之前没买
如果今天持有股票，说明之前今天或者之前买入，且今天没有卖掉

那么最大的收益就是最后一天不持有股票。

b. 状态空间
dp[i][k][0, 1] 
* 表示在第 i 天结束时，最多进行 k 次交易且在进行操作后持有 0 份股票的情况下可以获得的最大收益；
* 表示在第 i 天结束时，最多进行 k 次交易且在进行操作后持有 1 份股票的情况下可以获得的最大收益；
dp[i][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + price[i])
dp[i][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - price[i])
         = Math.max(dp[i - 1][1][1], - price[i])
=> dp[i][1][0,1]
=> dp[i][0, 1]

c. DP方程
dp[0][0] = 0
dp[0][1] = -price[0]

dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + price[i])
dp[i][1] = Math.max(dp[i - 1][1], -price[i])
*/

// @lc code=end

