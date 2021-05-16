/*
 * @lc app=leetcode.cn id=1021 lang=typescript
 *
 * [1021] 删除最外层的括号
 *
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/description/
 *
 * algorithms
 * Easy (78.48%)
 * Likes:    165
 * Dislikes: 0
 * Total Accepted:    51K
 * Total Submissions: 65.2K
 * Testcase Example:  '"(()())(())"'
 *
 * 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+
 * 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
 * 
 * 如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
 * 
 * 给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
 * 
 * 对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入："(()())(())"
 * 输出："()()()"
 * 解释：
 * 输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
 * 删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
 * 
 * 示例 2：
 * 
 * 输入："(()())(())(()(()))"
 * 输出："()()()()(())"
 * 解释：
 * 输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
 * 删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
 * 
 * 
 * 示例 3：
 * 
 * 输入："()()"
 * 输出：""
 * 解释：
 * 输入字符串为 "()()"，原语化分解得到 "()" + "()"，
 * 删除每个部分中的最外层括号后得到 "" + "" = ""。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * S.length <= 10000
 * S[i] 为 "(" 或 ")"
 * S 是一个有效括号字符串
 * 
 * 
 */

// @lc code=start
function removeOuterParentheses(S: string): string {
  let count = 0;
  let res = ''
  for (const item of S) {
    if (item === '(') {
      if (count > 0) res += item
      count ++
    }
    if (item === ')') {
      if (count > 1) res += item
      count --
    }
  }
  return res
};


// 50%
/*
1. 辅助栈
function removeOuterParentheses(S: string): string {
  let temp = ''
  let stack = []

  for (const item of S) {
    if (item === '(') {
      if (stack.length) temp += item
      stack.push(item)
    }
    if (item === ')') {
      stack.pop()
      if (stack.length) temp += item
    }
  }
  return temp
};
2. 计数法
2.1 单指针计数
function removeOuterParentheses(S: string): string {
  let count = 0;
  let res = ''
  for (const item of S) {
    if (item === '(') {
      if (count > 0) res += item
      count ++
    }
    if (item === ')') {
      if (count > 1) res += item
      count --
    }
  }
  return res
};
*/
// @lc code=end

