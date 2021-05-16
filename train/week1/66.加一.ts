/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.66%)
 * Likes:    654
 * Dislikes: 0
 * Total Accepted:    269.2K
 * Total Submissions: 589.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = [0]
 * 输出：[1]
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
function plusOne(digits: number[]): number[] {
  let flag = false
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1 || flag) digits[i] += 1
    flag = digits[i] >= 10
    if (flag) digits[i] = 0
  }
  if (flag) digits.unshift(1)
  return digits
};

// 60%
/*
1. 遍历O(n)求解
function plusOne(digits: number[]): number[] {
  let flag = false
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1 || flag) {
      digits[i] += 1
    }
    flag = digits[i] >= 10
    if (flag) digits[i] = 0
  }
  if (flag) {
    digits.unshift(1)
  }
  return digits
};
2. BigInt 进行 转数字操作后，再转回来
function plusOne(digits: number[]): number[] {
  return String(BigInt(digits.join('')) + 1n).split('').map(item=> {
    return Number(item)
  })
};
*/
// @lc code=end

