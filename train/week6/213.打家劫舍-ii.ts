/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 *
 * https://leetcode-cn.com/problems/house-robber-ii/description/
 *
 * algorithms
 * Medium (41.38%)
 * Likes:    677
 * Dislikes: 0
 * Total Accepted:    122.5K
 * Total Submissions: 287.7K
 * Testcase Example:  '[2,3,2]'
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈
 * ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
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
function rob(nums: number[]): number {
  const len = nums.length
  if (len <= 2) {
    return len === 1 ? nums[0] : Math.max(nums[0], nums[1])
  }
  return Math.max(subRob(nums, 0, len - 2), subRob(nums, 1, len - 1))

  function subRob(nums: number[], start, end): number {
    const dp = []
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    } 
    return dp[end]
  };
};



// 50

/*
1. DP方程
a. 子问题
基于打家劫舍1的变形，可以 max(sub(0), sub(n - 1)) 

b. 状态空间
dp1[i]
dp2[i]

c. DP 方程
dp1[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]) 
dp2[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]) 
max(dp1[n - 1], dp2[n - 2])
*/
// @lc code=end

