/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        if (sum < 0) {
            sum = 0;
        }
    }
    return result;
}
// var maxSubArray = function(nums) {
//     let ans = nums[0],
//         max = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         ans = Math.max(nums[i] + ans, nums[i]);
//         nums[i] = ans;
//         max = Math.max(ans, max);
//     }
//     return max;
// };

// 解题思路
/**
 * 思路：动态规划
 * 1. 首先拆解问题，找到子问题。
 * 2. dp[i]表示nums中以nums[i]结尾的最大子序和
 * 3. dp[i] = max(dp[i-1] + nums[i], nums[i])
 * 4. 那么我们就可以线性遍历数组(可以直接修改nums数组作为dp表，减少空间复杂度)，获取dp表，并在每次遍历中，获取dp表中当前最大值
 * 5. 遍历完成后，我们就可以拿到dp表中最大值。也就是我们想要结果
 * 时间复杂度 O(n),空间复杂度 O(1)
 */
/**
 * 思路：贪心法
 * 1. 从左向右迭代，一个一个数字迭代过去。
 * 2. sum += nums[i]，取 当前子串和之前结果 的最大值，作为目前找寻到的最大子序和。
 * 3. 如果sum < 0，则重新找寻子串
 */