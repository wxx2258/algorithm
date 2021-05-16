/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (73.60%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    169.9K
 * Total Submissions: 230.8K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 * 
 * 
 * 说明：
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const hash = new Map()
  const len = Math.max(nums1.length, nums2.length)
  const result = []
  nums1.forEach(item=> {
    if (!hash.has(item)) {
      hash.set(item, true) 
    }
  })
  for (let i = 0; i < len; i++) {
    if (hash.has(nums2[i]) && !result.includes(nums2[i])) {
      result.push(nums2[i])
    }
  }
  return result
};

// 50%


/*
1. 暴力双重循环求解
2. hash 一次遍历
function intersection(nums1: number[], nums2: number[]): number[] {
  const hash = new Map()
  const len = Math.max(nums1.length, nums2.length)
  const result = []
  nums1.forEach(item=> {
    if (!hash.has(item)) {
      hash.set(item, true) 
    }
  })
  for (let i = 0; i < len; i++) {
    if (hash.has(nums2[i]) && !result.includes(nums2[i])) {
      result.push(nums2[i])
    }
  }
  return result
};
3. 双指针
*/
// @lc code=end

