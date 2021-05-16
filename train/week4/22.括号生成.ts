/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.04%)
 * Likes:    1717
 * Dislikes: 0
 * Total Accepted:    258.3K
 * Total Submissions: 335.2K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start

function generateParenthesis(n: number): string[] {
  class Node {
    left: number
    right: number
    val: number
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
  }  
  if (n === 0) return []
  const res = []
  const queue = [new Node(0, 0, '')]
  
  while(queue.length) {
    const oldLen = queue.length

    for (let i = 0; i < oldLen; i++) {
      const top = queue.shift()
      if (top.left === n && top.right === n) res.push(top.val)
      if (top.left < n) queue.push(new Node(top.left + 1, top.right, top.val + '('))
      if (top.right < top.left) queue.push(new Node(top.left, top.right + 1, top.val + ')'))     
    }
  }
  return res
};

// 60






/*
0. 广度遍历，获取最后一层的结果
function generateParenthesis(n: number): string[] {
  class Node {
    left: number
    right: number
    val: number
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
  }  
  if (n === 0) return []
  const res = []
  const queue = [new Node(0, 0, '')]
  
  while(queue.length) {
    const oldLen = queue.length

    for (let i = 0; i < oldLen; i++) {
      const top = queue.shift()
      if (top.left === n && top.right === n) res.push(top.val)
      if (top.left < n) queue.push(new Node(top.left + 1, top.right, top.val + '('))
      if (top.right < top.left) queue.push(new Node(top.left, top.right + 1, top.val + ')'))     
    }
  }
  return res
};
1. 分治减枝 深度遍历
function generateParenthesis(n: number): string[] {
  const result = []
  recursion('', 0, 0, n)
  return result

  function recursion(string = '', left = 0, right = 0, n) {
    if (right === n) {
      result.push(string)
      return
    }
    if (left < n) {
      recursion(string + '(', left + 1, right, n)
    }
    if (right < left) {
      recursion(string + ')', left, right + 1, n)
    }
  }
};
1.1 广度优先遍历
2. 动态规划
https://leetcode-cn.com/problems/generate-parentheses/solution/22-gua-hao-sheng-cheng-by-alexer-660/
f(0) == ""
f(1) == (f(0))
f(2) == (f(0))f(1) + (f(1))f(0)
f(3) == (f(0))f(2) + (f(1))f(1) + (f(2))f(0)
...
f(n) == ((f0))f(n-1) + (f(1))f(n-2) + (f(2))f(n-3) + ... +(f(i))f(n-i-1) + ... + (f(n-1))

function generateParenthesis(n: number): string[] {
  const results = [['']]
  for (let i = 1; i <= n; i++) {
    const result = []
    for (let j = 0; j < i; j++) {
      const first = results[j]
      const second = results[i - j -1]
      for (const key in first) {
        const tempFirst = first[key]
        for (const secondKey in second) {
          var tempSecond = second[secondKey]
          result.push(`(${tempFirst})` + tempSecond)
        }
      }
    }
    results.push(result)
  }
  return results[results.length - 1]
};
*/
// @lc code=end

