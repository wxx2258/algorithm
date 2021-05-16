/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (77.84%)
 * Likes:    1295
 * Dislikes: 0
 * Total Accepted:    300.6K
 * Total Submissions: 386.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  if (nums.length === 0) return []
  const res = []
  recursion([])
  return res

  function recursion(path: number[]) {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue
      recursion([...path, nums[i]])
    }
  }
};

//50

/*
1. 递归（自己第一遍写的）
function permute(nums: number[]): number[][] {
  if (nums.length === 0) return []
  const res = []
  recursion([])
  return res

  function recursion(path: number[]) {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        recursion([...path, nums[i]])
      }
    }
  }
};
2. 回溯  利用一个hash记录已经走过的


*/
// @lc code=end

