/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (53.88%)
 * Likes:    3196
 * Dislikes: 0
 * Total Accepted:    499.7K
 * Total Submissions: 924.2K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [-1]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [-100000]
 * 输出：-100000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^5 
 * 
 * 
 * 
 * 
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let dp = [nums[0]], maxAns = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    maxAns = Math.max(dp[i], maxAns)
  }
  return maxAns;
};

// 50

/*
1. 暴力：遍历出所有情况进行对比

2. 动态规划
a. 分解子问题，递归分治
max_sum(i) = Math.max(a[i], dp[i - 1] + a[i])
b. 定义状态空间
dp[i]
c. 状态方程式
// 这里都是自身或者连续的，不存在断开的情况
dp[i] = Math.max(a[i], dp[i - 1] + a[i])
最大子序和 = 当前元素最大 或者 包含之前最大
function maxSubArray(nums: number[]): number {
  let dp = [nums[0]], maxAns = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    maxAns = Math.max(dp[i], maxAns)
  }
  return maxAns;
};

用pre存储之前最大的
pre = Math.max(pre + a[i], a[i])

function maxSubArray(nums: number[]): number {
  let pre = 0, maxAns = nums[0];
  nums.forEach((num) => {
    pre = Math.max(pre + num, num);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
*/
// @lc code=end

