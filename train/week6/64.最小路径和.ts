/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (68.31%)
 * Likes:    872
 * Dislikes: 0
 * Total Accepted:    213.6K
 * Total Submissions: 312.1K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const len = grid[0].length
  const dp = [...grid[0]]
  for (let i = 1; i < dp.length; i++) {
    dp[i] += dp[i - 1]
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        dp[j] = dp[j] + grid[i][j]
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j]
      }
    }
  }
  return dp[len - 1]
};

// 50

/*
1. 递归
第（m,n）个节点的最小路径和等于 Math.max(sub(m-1, n), sub(m, n - 1)) + grid[m,n]  
function minPathSum(grid: number[][]): number {
  const hash = new Map()
  return recursion(grid.length - 1, grid[0].length - 1)
  function recursion(i, j) {
    const key = `${i},${j}`
    if (hash.has(key)) return hash.get(key)
    if (i === 0 && j === 0) return grid[0][0]
    if (i < 0 || j < 0) return +Infinity
    hash.set(key, Math.min(recursion(i - 1, j), recursion(i, j - 1)) + grid[i][j])
    return hash.get(key)
  }
};
2. 动态规划
a. 分解子问题，可见前面递归解法
b. 定义状态空间 
dp[j]
c. 定义DP方程
dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j]
*/

// @lc code=end

