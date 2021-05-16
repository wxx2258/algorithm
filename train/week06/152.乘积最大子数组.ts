/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (41.33%)
 * Likes:    1088
 * Dislikes: 0
 * Total Accepted:    139.6K
 * Total Submissions: 336.8K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  let max = -Infinity, iMax = 1, iMin = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) [iMax, iMin] = [iMin, iMax]
    iMax = Math.max(iMax * nums[i], nums[i])
    iMin = Math.min(iMin * nums[i], nums[i])
    console.log(iMax, iMin)
    max = Math.max(iMax, max)
  }
  return max
};

// 50

/*
这里有一个点，就是存在负数，可能会存在反转的情况
1. 暴力 n * n
2. 动态规划
a. 分治
遍历数组不断计算最大值，并不断更新
// 这里都是自身或者连续的，不存在断开的情况
iMax = max(iMax * nums[i], nums[i]) // 最正的数
iMin = min(iMin * nums[i], nums[i]) // 最负的数
max = max(max, iMax)
b. 状态数组定义
c. DP 方程
*/
// @lc code=end

