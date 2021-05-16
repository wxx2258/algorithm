/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (63.07%)
 * Likes:    673
 * Dislikes: 0
 * Total Accepted:    157.7K
 * Total Submissions: 250K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * 
 * 
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  nums = nums.sort((a,b)=> (a-b))
  const res = []
  const hash: Map<number, boolean> = new Map()
  recursion(0, [])
  return res
  function recursion(first ,path) {
    if (path.length === nums.length) {
      res.push(path)
      return
    }

    for (let i = first; i < nums.length; i++) {
      if (hash.has(i) && !!hash.get(i)) continue
      // if (i - 1 >= 0 && nums[i - 1] == nums[i] && !(hash.has(i - 1) && hash.get(i - 1))) { // 避免产生重复的排列
      //     continue;
      // }
      hash.set(i, true)
      recursion(i, [...path, nums[i]])
      hash.set(i, false)    
    }
  }
};

// 50

/*
1. 递归回溯 排序后去重
https://leetcode-cn.com/problems/permutations-ii/solution/quan-pai-lie-ii-by-leetcode-solution/
假设我们有 33 个重复数排完序后相邻，那么我们一定保证每次都是拿从左往右第一个未被填过的数字，
即整个数组的状态其实是保证了 
  * [未填入，未填入，未填入] 到 
  * [填入，未填入，未填入]，
  * 再到 [填入，填入，未填入]，
  * 最后到 [填入，填入，填入] 
的过程的，因此可以达到去重的目标。
function permuteUnique(nums: number[]): number[][] {
  nums = nums.sort((a,b)=> (a-b))
  const res = []
  const hash: Map<number, boolean> = new Map()
  recursion([])
  return res
  function recursion(path) {
    if (path.length === nums.length) {
      res.push(path)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (hash.has(i) && !!hash.get(i)) continue
      if (i - 1 >= 0 && nums[i - 1] == nums[i] && !(hash.has(i - 1) && hash.get(i - 1))) { // 避免产生重复的排列
          continue;
      }
      hash.set(i, true)
      recursion([...path, nums[i]])
      hash.set(i, false)    
    }
  }
};

*/
// @lc code=end

