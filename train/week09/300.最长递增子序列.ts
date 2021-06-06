/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (49.63%)
 * Likes:    1644
 * Dislikes: 0
 * Total Accepted:    276.6K
 * Total Submissions: 555.7K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以设计时间复杂度为 O(n^2) 的解决方案吗？
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  let len = 1,
    n = nums.length
  if (n === 0) return 0
  let d = []
  d[len] = nums[0]
  for (let i = 1; i < n; ++i) {
    if (nums[i] > d[len]) {
      d[++len] = nums[i];
    } else {
      let l = 1,
        r = len,
        pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
};
/**
1. 动态规划
if(nums.length === 0) {
return 0
}
let max = 1
let cell = [1]
for(let i = 1; i < nums.length; i++) {
cell.push(1)
for(let j = 0; j < i; j++) {
  if (nums[j] < nums[i]) {
    cell[i] = Math.max(cell[i], cell[j] + 1)
    max = Math.max(cell[i], max)
  }
}
}
return max
2. 动态规划 + 二分查找

*/
// @lc code=end