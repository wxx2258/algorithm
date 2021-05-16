/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (37.06%)
 * Likes:    503
 * Dislikes: 0
 * Total Accepted:    71K
 * Total Submissions: 189.4K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：k = 2, prices = [2,4,1]
 * 输出：2
 * 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 * 
 * 示例 2：
 * 
 * 
 * 输入：k = 2, prices = [3,2,6,5,0,3]
 * 输出：7
 * 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
 * ⁠    随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 =
 * 3 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
  let n = prices.length
  const maxProfit2 = function(prices: number[]): number {
    let profit_out = 0
    let profit_in = -prices[0]
    for (let i = 1; i < n; i++) {
      profit_out = Math.max(profit_out, profit_in + prices[i])
      profit_in = Math.max(profit_in, profit_out - prices[i])
    }
    return profit_out
  }
  if (k > n / 2) return maxProfit2(prices)
  let profit = new Array(k)
  for (let j = 0; j <= k; j++) {
    profit[j] = {
      profit_in: -prices[0],
      profit_out: 0
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      profit[j] = {
        profit_out: Math.max(profit[j].profit_out, profit[j].profit_in + prices[i]),
        profit_in: Math.max(profit[j].profit_in, profit[j - 1].profit_out - prices[i])
      }
    }
  }
  return profit[k].profit_out
};

// 50 

/*
1. 动态规划
a. 子问题 
这里的操作也是一样
* 不持有 之前持有现在卖出，不动
* 持有 之前不持有买入（注意第k次交易则不能再买了）， 不动

b. 状态空间
dp[i][k....1][0,1]

c. DP方程
dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + price[i])
dp[i][k][1] = max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - price[i])


一个有收益的交易至少需要两天（在前一天买入，在后一天卖出，前提是买入价格低于卖出价格）。
如果股票价格数组的长度为 n，则有收益的交易的数量最多为 n / 2（整数除法）。因此 k 的临界值是 n / 2。
如果给定的 k 不小于临界值，即 k >= n / 2，则可以将 k 扩展为正无穷，也就是第二题的情况，如下函数 maxProfit2。
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/qian-duan-shi-tang-ti-jie-chao-hao-li-ji-gpb4/


*/
// @lc code=end

