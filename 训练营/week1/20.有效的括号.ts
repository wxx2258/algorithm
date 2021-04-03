/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.85%)
 * Likes:    2300
 * Dislikes: 0
 * Total Accepted:    586.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "([)]"
 * 输出：false
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '{':
      case '[':
      case '(':
        stack.unshift(s[i])
        break;
      case '}':
        if (stack.shift() !== '{') return false
        break;
      case ']':
        if (stack.shift() !== '[') return false
        break;
      case ')':
        if (stack.shift() !== '(') return false
        break;
    }
  }
  return stack.length === 0
};

// 50%
/*
1. 暴力求解
* 不断比例消除，知道最后字符串可以为空
function isValid(s: string): boolean {
  const reg = /\(\)|\[\]|\{\}/g
  while (reg.test(s)) {
    s = s.replace(reg, '')
  }
  return s.length <= 0
};

2. 栈的思想
不匹配入栈，匹配出栈
function isValid(s: string): boolean {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '{':
      case '[':
      case '(':
        stack.unshift(s[i])
        break;
      case '}':
        if (stack.shift() !== '{') return false
        break;
      case ']':
        if (stack.shift() !== '[') return false
        break;
      case ')':
        if (stack.shift() !== '(') return false
        break;
    }
  }
  return stack.length === 0
};
*/
// @lc code=end

