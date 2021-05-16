/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 *
 * https://leetcode-cn.com/problems/maximal-square/description/
 *
 * algorithms
 * Medium (45.16%)
 * Likes:    764
 * Dislikes: 0
 * Total Accepted:    107.4K
 * Total Submissions: 235K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix =
 * [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [["0","1"],["1","0"]]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：matrix = [["0"]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * matrix[i][j] 为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
  const width = matrix.length
  const height = matrix[0].length
  let maxSide = 0
  const dp = new Array(width)
  for (let i = 0; i < width; i++) {
    dp[i] = new Array(height)
    for (let j = 0; j < height; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        maxSide = Math.max(maxSide, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return maxSide * maxSide
};

// 50

/*
1. 动态规划（https://leetcode-cn.com/problems/maximal-square/solution/li-jie-san-zhe-qu-zui-xiao-1-by-lzhlyle/）
a. 子问题
若某格子值为 1，则以此为右下角的正方形的、最大边长为：上面的正方形、左面的正方形或左上的正方形中，最小的那个，再加上此格。
说明sub(i, j) = min(sub(i-1, j), sub(i, j - 1), sub(i-1,j-1)) + 1

b. 状态空间
dp[i][j]

c. DP方程
dp(i, j) = min(dp(i-1, j), dp(i, j - 1), dp(i-1,j-1)) + 1
dp[0][0]   === 1 ? 1 : 0

*/
// @lc code=end

