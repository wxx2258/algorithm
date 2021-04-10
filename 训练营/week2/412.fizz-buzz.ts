/*
 * @lc app=leetcode.cn id=412 lang=typescript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode-cn.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (65.89%)
 * Likes:    94
 * Dislikes: 0
 * Total Accepted:    60.1K
 * Total Submissions: 91.1K
 * Testcase Example:  '3'
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 * 
 * 示例：
 * 
 * n = 15,
 * 
 * 返回:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  let res = []
  for (let i = 1; i <= n; i++) {
    let str = ''
    if (i % 3 === 0) str += 'Fizz'
    if (i % 5 === 0) str += 'Buzz'
    res.push(str ? str : String(i))
  }
  return res
  // return new Array(n).fill(0).reduce((acc, cur, index)=> {
  //   let str = ''
  //   if ((index + 1) % 3 === 0) str += 'Fizz'
  //   if ((index + 1) % 5 === 0) str += 'Buzz'
  //   return [ ...acc, str ? str: String(index + 1)]
  // }, [])
};


// 50%

/*
1. 暴力一次循环
*/
// @lc code=end

