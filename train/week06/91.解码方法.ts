/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 *
 * https://leetcode-cn.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (26.16%)
 * Likes:    841
 * Dislikes: 0
 * Total Accepted:    132.5K
 * Total Submissions: 450.1K
 * Testcase Example:  '"12"'
 *
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：
 * 
 * 
 * "AAJF" ，将消息分组为 (1 1 10 6)
 * "KJF" ，将消息分组为 (11 10 6)
 * 
 * 
 * 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。
 * 
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。
 * 
 * 题目数据保证答案肯定是一个 32 位 的整数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "12"
 * 输出：2
 * 解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "226"
 * 输出：3
 * 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "0"
 * 输出：0
 * 解释：没有字符映射到以 0 开头的数字。
 * 含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
 * 由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "06"
 * 输出：0
 * 解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 只包含数字，并且可能包含前导零。
 * 
 * 
 */

// @lc code=start
function numDecodings(s: string): number {  
  let dpi_1 = 1, dpi_2 = 0, res = 0
  for (let i = 1; i <= s.length; i++) {
    res = 0
    if (s[i - 1] !== '0') {
      res += dpi_1
    }
    if (i >= 2 && s[i - 2] !== '0' && +`${s[i - 2]}${s[i - 1]}` <= 26) {
      res += dpi_2
    }
    [dpi_1, dpi_2] = [res, dpi_1]
  }
  return res
};

// 50
/*
1. 递归（广度遍历）
每次都有两个选择，单独一个或者连接下一个数字（有限制条件）
function numDecodings(s: string): number {
  let cache = new Map()
  return helper(0)
  function helper(i: number) {
    if (cache.has(i)) return cache.get(i)
    if (i === s.length) {
      return 1
    }
    let sub1 = 0, sub2 = 0
    if (+s[i] !== 0) {
      sub1 = helper(i + 1)
    }
    if (+s[i] !== 0 && +`${s[i]}${s[i + 1]}` <= 26 && i <= s.length - 1) {
      sub2 = helper(i + 2)
    }
    cache.set(i, sub1 + sub2)
    return cache.get(i)
  }
};

2. 动态规划
a. 子问题
sub(i) = sub(i - 1) + sub(i - 2)
sub(i - 1) s[i - 1] 不能为0
sub(i - 2) s[i - 1]s[i - 2] 不能大于26 且 s[i - 2] !== 0

b. 状态空间
dp[i]

c. dp方程
dp[i] = dp(i - 1) + dp(i - 2)
cur = cur + pre

function numDecodings(s: string): number {  
  let dp = new Array(s.length + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1]
    }
    if (i >= 2 && s[i - 2] !== '0' && +`${s[i - 2]}${s[i - 1]}` <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[s.length]
};

*/
// @lc code=end

