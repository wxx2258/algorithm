/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    const dp = [];

    if (len === 0 || len === 1) {
        return 0;
    }
    for(let i = 0; i < len; i++) {
        dp[i] = new Array(2);
    }
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for(let day = 1; day < len; day ++) {
        dp[day][0] = Math.max(dp[day - 1][0], dp[day - 1][1] + prices[day])
        dp[day][1] = Math.max(dp[day - 1][1], -prices[day]);
    }
    return dp[len - 1][0];
};
// maxProfit([1,2])