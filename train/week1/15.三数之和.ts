/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (31.41%)
 * Likes:    3177
 * Dislikes: 0
 * Total Accepted:    467.1K
 * Total Submissions: 1.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  const result:number[][] = []
  const len = nums.length
  if (len < 3) return []
  nums = nums.sort((a,b)=> a - b)
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break // 提前跳出，已经大于0了，后面不会存在数可以相加等于该数了
    if (nums[i] === nums[i-1]) continue // 去重
    let left = i + 1
    let right = len - 1
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while(left < right && nums[left] === nums[left + 1]) left ++ // 去重
        while(left < right && nums[right] === nums[right - 1]) right -- // 去重
        left ++
        right --
      } else if (sum > 0) {
        right --
      } else {
        left ++
      }
    }
  }
  return result
};


/*
1. 暴力求解
function threeSum(nums: number[]): number[][] {
  const result:number[][] = []
  let hash = new Map()
  nums.sort((a, b)=> a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let sort = [nums[i], nums[j], nums[k]].sort((a,b)=> a-b)
          if (!hash.has(sort.join(''))) {
            result.push([nums[i], nums[j], nums[k]])
            hash.set(sort.join(''), true)
          }
        }
      }
    }
  }
  return result
};
2. 排序，双指针夹逼
（注意去重的几个点）
* 如果最外层的数和上一个数相同，无需再次查找
* 如果内部左右指针，与下一个指向的值相同，可以跳到下一个不同值

*/
// @lc code=end

