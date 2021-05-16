/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (71.22%)
 * Likes:    1813
 * Dislikes: 0
 * Total Accepted:    379.5K
 * Total Submissions: 532.7K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let ans = 0;
  for(let i = 0; i < nums.length; i++){
    ans ^= nums[i];
  }
  return ans;
};


// 50 


/*
1. hash记录出现次数 时间： O(N) 空间： O(N)
function singleNumber(nums: number[]): number {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (!!hash[nums[i]]) {
      hash[nums[i]] += 1
    } else {
      hash[nums[i]] = 1
    }
  }
  for (const key in hash) {
    if (hash[key] === 1) return +key
  }
};
2. 如何不用额外的空间呢？ 异或运算。。。
* 任何数和自己做异或运算，结果为 0，即 a⊕a=0 。
* 任何数和 00 做异或运算，结果还是自己，即 a⊕0=⊕。
* 异或运算中，满足交换律和结合律，也就是 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
链接：https://leetcode-cn.com/problems/single-number/solution/wu-tu-guan-fang-tui-jian-ti-jie-zhi-chu-2ttk9/
3. 先排序，在遍历
*/

// @lc code=end

