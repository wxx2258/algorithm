/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (67.33%)
 * Likes:    755
 * Dislikes: 0
 * Total Accepted:    145.4K
 * Total Submissions: 215.6K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1
 * 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * 输出：11
 * 解释：如下面简图所示：
 * ⁠  2
 * ⁠ 3 4
 * ⁠6 5 7
 * 4 1 8 3
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：triangle = [[-10]]
 * 输出：-10
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * triangle[0].length == 1
 * triangle[i].length == triangle[i - 1].length + 1
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？
 * 
 * 
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  let dp = [...triangle[triangle.length - 1]]
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
};

// 50

/*
1. 暴力求解, 分治  [超时了]
广度遍历或者深度遍历出所有的结果，然后比较出最小的值。

这里已经有子问题的线索了，就是每次广度遍历的时候，都会面临两种选择，左边或者右边。
那么就是求解选 Math.mix（左边最小路径和，右边最小路径和） + 当前值

function minimumTotal(triangle: number[][]): number {
  let maxLevel = triangle.length
  return recursion(0, 0, triangle)
  function recursion(level: number, index: number, triangle: number[][]) {
    if (level === maxLevel - 1) {
      return triangle[level][index]
    }
    const left = recursion(level + 1, index, triangle)
    const right = recursion(level + 1, index + 1, triangle)
    return triangle[level][index] + Math.min(left, right)
  }
};

2. 动态规划
a. 找到重复子问题 
Math.mix（左边最小路径和，右边最小路径和） + 当前值
b. 定义状态空间
dp[i][j] 
c. 定义动归方程式 求解的dp[0][0]
dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
从递归的角度是自顶向下的，所以dp的时候需要自底向上。
function minimumTotal(triangle: number[][]): number {
  let dp = [...triangle]
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
    }
  }
  return dp[0][0]
};

2.1 空间优化 + 只需要一个数组
b. 定义状态空间
dp[maxLen]
c. dp[i] = triangle[i] + Math.min(dp[i],dp[i + 1])

function minimumTotal(triangle: number[][]): number {
  let dp = [...triangle[triangle.length - 1]]
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1])
    }
  }
  return dp[0]
};
*/

// @lc code=end

