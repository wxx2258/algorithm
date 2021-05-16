/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (37.98%)
 * Likes:    541
 * Dislikes: 0
 * Total Accepted:    141.5K
 * Total Submissions: 371K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 * 
 * 
 * 
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 
 * obstacleGrid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  if(!obstacleGrid || obstacleGrid[0][0] == 1){
    return 0;
  }
  let hash = new Map()
  return helper(n - 1, m - 1);
  function helper(i, j) {
    let key = `${i},${j}`
    if (hash.has(key)) return hash.get(key)
    if (i === 0 && j === 0 && obstacleGrid[i][j] !== 1) {
      return 1
    }
    if (i < 0 || j < 0 || obstacleGrid[i][j] === 1) return 0
    hash.set(key, helper(i - 1, j) + helper(i, j - 1))
    return hash.get(key)
  }
};

// 50





/*
1. 递归分治
https://leetcode-cn.com/problems/unique-paths-ii/solution/63-bu-tong-lu-jing-ii-by-alexer-660/

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  if(!obstacleGrid || obstacleGrid[0][0] == 1){
    return 0;
  }
  let hash = new Map()
  return helper(0,0);
  function helper(i, j) {
    let key = `${i},${j}`
    if (hash.has(key)) return hash.get(key)
    if (i === n - 1 && j === m - 1 && obstacleGrid[i][j] !== 1) {
      return 1
    }
    if (i >= n || j >= m || obstacleGrid[i][j] === 1) return 0
    hash.set(key, helper(i + 1, j) + helper(i, j + 1))
    return hash.get(key)
  }
};

2. 动态规划
a. 分解子问题
* 每个路径有两个路径选择，每个是左边和上边的总和
* 对于障碍，这个点的路径选择数为0
b. 定义状态空间
dp[n]
c. 动态方程式
dp[n] = dp[n - 1] + dp[n]
dp[1] = 0

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length
  const dp = new Array(n)

  for (let j = 0; j < n; j++) {
    dp[j] = obstacleGrid[0][j] === 1 || dp[j - 1] === 0 ? 0 : 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0
      } else {
        dp[j] += j === 0 ? 0 : dp[j - 1]
      }
    }
  }
  return dp[n - 1]
};
*/

// @lc code=end

