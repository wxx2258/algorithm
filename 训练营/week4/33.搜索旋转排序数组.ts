/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (41.39%)
 * Likes:    1336
 * Dislikes: 0
 * Total Accepted:    267.8K
 * Total Submissions: 645.2K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 ）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ...,
 * nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如，
 * [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4 
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
 * 
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length

  while (left < right) {
    const mid = (left + right) >> 1
    if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
      left = mid + 1
    } else if (target > nums[mid] && target < nums[0]) { // 隐含了 num[mid] < nums[0] 说明是乱序的
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left === right && nums[left] === target ? left : -1
};


// 50 



/*
1. 暴力： 还原 > 升序 》 二分
2. 二分，判断条件有点变化
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length

  while (left < right) {
    const mid = (left + right) >> 1
    if (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) {
      left = mid + 1
    } else if (target > nums[mid] && target < nums[0]) { // 隐含了 num[mid] < nums[0] 说明是乱序的
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left === right && nums[left] === target ? left : -1
};
*/
// @lc code=end

