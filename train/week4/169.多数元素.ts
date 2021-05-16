/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (65.91%)
 * Likes:    956
 * Dislikes: 0
 * Total Accepted:    299.3K
 * Total Submissions: 454K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 
 * 
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * 
 * 
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let cur = 0
  let count = 0
  for (const num of nums) {
    if (count === 0) cur = num
    count += (cur === num ? 1 : -1)
  }
  return cur
};
/*
满足空间复杂度为O(1)的算法
1. 一次遍历，多数元素的累加 一定可以抵消其他元素的数量，最后得出 多数元素
function majorityElement(nums: number[]): number {
  let cur = 0
  let count = 0
  for (const num of nums) {
    if (count === 0) cur = num
    count += (cur === num ? 1 : -1)
  }
  return cur
};

2. 分治（二分）【时间复杂度为 O(nlogn)】
左右分成两个数组，结果为这两个数组的众数的其中一个。
  如果左右两边相等，众数很清晰。
  如果左右两边不想等，比较哪个出现的次数多。
截止条件：只剩一个数的时候
*/
// @lc code=end

