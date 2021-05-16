/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Medium (39.09%)
 * Likes:    968
 * Dislikes: 0
 * Total Accepted:    129.9K
 * Total Submissions: 326.2K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [2,3,0,1,4]
 * 输出: 2
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
function jump(nums: number[]): number {
  let curr = 0; // 当前位置
  let next = 0; // 跳跃后的位置
  let stepNum = 0; // 跳跃次数
  let length = nums.length - 1;
  for (let i = 0; i < length; i++) {
      next = Math.max(next, i + nums[i]);// 跳一次的最远跳跃距离 = 当前位置 + 可跳跃的最大数
      if (curr >= length) break;
      if (curr === i) {
          curr = next;
          stepNum ++;
      }
  }
  return stepNum;
};


// 50

/*
1. 暴力深度优先遍历，比较并找到最短了路径
2. 贪心算法
* 
*/
// @lc code=end

