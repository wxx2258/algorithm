/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (79.81%)
 * Likes:    1140
 * Dislikes: 0
 * Total Accepted:    234.8K
 * Total Submissions: 294.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有元素 互不相同
 * 
 * 
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); ++mask) {
    // 根据每个元素是否选中，有 2^n 种组合
    const t = [];
    for (let i = 0; i < n; ++i) {
        if (mask & (1 << i)) { // 位运算判断，好精妙
          // mask & 1111111……1111 根据 0 1判断是否进入
          t.push(nums[i]);
        }
    }
    ans.push(t);
  }
  return ans;
};


// 50

/*
1. 迭代循环
2. 递归遍历所有情况
function subsets(nums: number[]): number[][] {
  let res = []
  recursion(0, [])
  return res
  function recursion(cur:number, curState: number[]) {
    if (cur === nums.length) {
      res.push(curState)
      return
    }
    recursion(cur + 1, [...curState, nums[cur]])
    recursion(cur + 1, [...curState])
  }
};
 */
// @lc code=end

