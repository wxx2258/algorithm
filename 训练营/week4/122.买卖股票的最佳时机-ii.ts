/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (67.26%)
 * Likes:    1194
 * Dislikes: 0
 * Total Accepted:    350.1K
 * Total Submissions: 519.2K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: prices = [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: prices = [1,2,3,4,5]
 * 输出: 4
 * 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: prices = [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
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
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
};

// 50
/*
1. 暴力遍历出所有可能的买卖方式
* 可以用广度遍历的方式。每天的决策是买 or 卖 or 不动 or 卖出并买入，并且要现有筹码
* 最后比较遍历出来的结果谁最大
// 超时了，可以减枝优化的
function maxProfit(prices: number[]): number {
  if (prices.length === 0) return 0
  let profit = 0
  let queue: [number | null, number][] = [[null, 0], [prices[0], -prices[0]]]
  let day = 0
  while(queue.length && day < prices.length) {
    const oldLen = queue.length
    day ++

    for (let i = 0; i < oldLen; i++) {
      const [currentBuy, currentProfit] = queue.shift()
      if (day === prices.length) {
        profit = Math.max(profit, currentBuy ? prices[day - 1] + currentProfit : currentProfit)
        continue
      }
      if (currentBuy !== null) {
        queue.push([null, prices[day] + currentProfit]) // 卖出
        queue.push([prices[day], currentProfit]) // 卖出 后 买入
      } else {
        queue.push([prices[day], currentProfit - prices[day]]) // 买入
      }
      queue.push([currentBuy, currentProfit]) // 不动 // 买入并卖出跟不动是一致的
    }
  }
  return profit
};
2. 优化： 贪心算法
证明： 在每一步选择过程中找到最优，即赚取所有的上升区间
* 只要明天的价格大于今天的价格，则买入
* 每到下一天，则必定卖出手中的股票
function maxProfit(prices: number[]): number {
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
};
3. 动态规划
// 待再细细的品

*/
// @lc code=end

