/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (54.81%)
 * Likes:    2217
 * Dislikes: 0
 * Total Accepted:    223.3K
 * Total Submissions: 404.8K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let heightSum = 0
  let maxLeftArea = 0, maxRightArea = 0,
      maxLeftHeight = 0, maxRightHeight = 0
  const len = height.length

  for (let i = 0; i < len; i++) {
    if (height[i] > maxRightHeight) {
      maxRightHeight = height[i]
    }
    if (height[len - 1 - i] > maxLeftHeight) {
      maxLeftHeight = height[len - 1 - i]
    }
    maxRightArea += maxRightHeight
    maxLeftArea += maxLeftHeight
    heightSum += height[i]
  }
  return maxRightArea + maxLeftArea - (maxLeftHeight * len) - heightSum
};

// 50%

/*
1. 暴力解决
2. 单调栈
3. 数学公式 
时间复杂度：O(n)
空间复杂度：O(1)
（https://leetcode-cn.com/problems/trapping-rain-water/solution/wei-en-tu-jie-fa-zui-jian-dan-yi-dong-10xing-jie-j/）


*/
// @lc code=end

