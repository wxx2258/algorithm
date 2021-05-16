/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (49.51%)
 * Likes:    819
 * Dislikes: 0
 * Total Accepted:    300.1K
 * Total Submissions: 605K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自
 * nums2 的元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * nums1.length == m + n
 * nums2.length == n
 * 0 
 * 1 
 * -10^9 
 * 
 * 
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let indexS1 = m - 1
  let indexS2 = n - 1
  let index = m + n -1

  while(indexS1 >= 0 || indexS2 >= 0) {
    if (indexS1 === -1) {
      nums1[index] = nums2[indexS2--]
    } else if (indexS2 === -1) {
      nums1[index] = nums1[indexS1--]
    } else if (nums1[indexS1] <= nums2[indexS2]) {
      nums1[index] = nums2[indexS2 --]
    } else {
      nums1[index] = nums1[indexS1 --]
    }
    index --
  }
};
//50%












/*
1. js api处理（即合并后排序）
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length - m, ...nums2).sort((a, b)=> a - b)
};
2. 双指针
3. 逆向双指针

！！！！ 两个数组的操作要习惯想到双指针
*/
// @lc code=end

