/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (64.77%)
 * Likes:    979
 * Dislikes: 0
 * Total Accepted:    245K
 * Total Submissions: 377.1K
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 
 * 问总共有多少条不同的路径？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：m = 3, n = 7
 * 输出：28
 * 
 * 示例 2：
 * 
 * 
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：m = 7, n = 3
 * 输出：28
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：m = 3, n = 3
 * 输出：6
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 题目数据保证答案小于等于 2 * 10^9
 * 
 * 
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  let hash = new Map()
  return recursion(m - 1, n - 1)
  function recursion(i, j): number {
    let key = `${i},${j}`
    if (hash.has(key)) return hash.get(key)
    if (i === 0 || j === 0) return 1

    hash.set(key, recursion(i - 1, j) + recursion(i, j - 1))
    return hash.get(key)
  }
};

// 60


/*
1. 递归
* 第(i,j)步都是 (i-1, j)向下 或者 (i, j-1)步向右走过来的，这就是第 (i,j) 步的所有走法
// 加上一个hash存储已经计算过的值，已经慢慢接近动归了

function uniquePaths(m: number, n: number): number {
  let hash = new Map()
  return recursion(m - 1, n - 1)
  function recursion(i, j): number {
    let key = `${i},${j}`
    if (hash.has(key)) return hash.get(key)
    if (i === 0 || j === 0) return 1

    hash.set(key, recursion(i - 1, j) + recursion(i, j - 1))
    return hash.get(key)
  }
};

2. 动态规划
a. 先找子问题（分治，递归）
* 分治： 每一步都只有两个选择，向下或者向右，边界则只有一种走法
* 分解为两种走法相加，得到该点的走法

b. 定义状态空间
dp[i][j]

c. 动态规划的状态方程式
dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
dp[0][j] = 1
dp[i][0] = 1

function uniquePaths(m: number, n: number): number {
  let dp = new Array(m)
  dp.fill(new Array(n))
  for (let i = 0; i < m ; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
};

function uniquePaths(m: number, n: number): number {
  let dp = new Array(n)
  dp.fill(new Array(m))
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1 || j === n - 1) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i + 1][j] + dp[i][j  1]
      }
    }
  }
  return dp[0][0]
};

// 空间优化
function uniquePaths(m: number, n: number): number {
  let dp = new Array(m)
  for (let i = 0; i < m ; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0 || i === 0) {
        dp[j] = 1
      } else {
        dp[j] = dp[j] + dp[j - 1]
      }
    }
  }
  return dp[n - 1]
};
*/
// @lc code=end

