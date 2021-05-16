/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (41.93%)
 * Likes:    1187
 * Dislikes: 0
 * Total Accepted:    235.2K
 * Total Submissions: 558.3K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个下标。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
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
function canJump(nums: number[]): boolean {
  let max = 0
  for(let i = 0; i < nums.length; i++ ) {
    if (i <= max) {
      max = Math.max(i + nums[i], max)
      if (max >= nums.length - 1) return true
    } else {
      break
    }
  }
  return false
};

/**
1. 暴力递归，一个深度优先遍历，每一个下标的值说明都有 nums[i]种选择
2. 贪心算法
遍历一次，比较每个下表能到达的最大位置，如果大于 nums.length ，说明可以到达. 并在可达到区域一直判断是否已经到结尾

 */
// @lc code=end

