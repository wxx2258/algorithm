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
  return majorityElementRec(nums, 0, nums.length -1)
  
  function majorityElementRec(nums: number[], lo: number, hi: number) {
    if (lo === hi) return nums[lo]

    let mid = Math.floor((hi - lo) / 2) + lo
    let left = majorityElementRec(nums, lo, mid)
    let right = majorityElementRec(nums, mid + 1, hi)
    if (left === right) return left

    let leftCount = majorityCount(nums, left, lo, hi)
    let rightCount = majorityCount(nums, right, lo, hi)

    return leftCount > rightCount ? left : right
  }
  function majorityCount(nums, num, lo, hi) {
    let count = 0
    for (let i = lo; i <= hi; i++) {
      if (num === nums[i]) count ++
    }
    return count
  }
};

// 50
/*
1. hash 存储每个数出现次数
2. 排序后遍历
3. 抵消 栈的降维  可以满足 O(1)的空间
function majorityElement(nums: number[]): number {
  let cur = 0
  let count = 0
  for (const num of nums) {
    if (count === 0) cur = num
    count += (cur === num ? 1 : -1)
  }
  return cur
};
4. 分治 同样满足O(1)的复杂度
* 如果数 a 是数组 nums 的众数，如果我们将 nums 分成两部分，那么 a 必定是至少一部分的众数。

*/
// @lc code=end

