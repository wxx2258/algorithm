/*
有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

示例 1:

输入: k = 5

输出: 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/get-kth-magic-number-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/
function getKthMagicNumber(k: number): number {
  let p3 = 0, p5= 0, p7 = 0
  let dp = [1]
  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7)
    if (dp[i] === dp[p3] * 3) p3 ++
    if (dp[i] === dp[p5] * 5) p5 ++
    if (dp[i] === dp[p7] * 7) p7 ++
  }
  return dp[k - 1]
};

/*
1. 动态规划 三个指针
借鉴：https://leetcode-cn.com/problems/get-kth-magic-number-lcci/solution/chao-jian-dan-jie-fa-yi-kan-jiu-dong-by-yuanninesu/
https://leetcode-cn.com/problems/get-kth-magic-number-lcci/solution/dpsi-lu-xiang-jie-dong-tai-gui-hua-de-you-hua-by-i/
function getKthMagicNumber(k: number): number {
  let p3 = 0, p5= 0, p7 = 0
  let dp = [1]
  for (let i = 1; i < k; i++) {
    dp[i] = Math.min(dp[p3] * 3, Math.min(dp[p5] * 5, dp[p5] * 7))
    if (dp[i] === dp[p3] * 3) p3 ++
    if (dp[i] === dp[p5] * 5) p5 ++
    if (dp[i] === dp[p7] * 7) p7 ++
  }
  return dp[k - 1]
};
2. 堆  ！！！ 待回去复习 
*/
