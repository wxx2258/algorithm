/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 *
 * https://leetcode-cn.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (62.28%)
 * Likes:    538
 * Dislikes: 0
 * Total Accepted:    116.3K
 * Total Submissions: 186.4K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 
 * 一个字符串的 子序列
 * 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 
 * 
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 
 * 
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：text1 = "abcde", text2 = "ace" 
 * 输出：3  
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc" ，它的长度为 3 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * text1 和 text2 仅由小写英文字符组成。
 * 
 * 
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  if (!text1 || !text2) return 0
  const m = text1.length, n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    const sub1 = text1[i - 1]
    for (let j = 1; j <= n; j++) {
      const sub2 = text2[j - 1]
      if (sub1 === sub2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m][n]
};


// 50


/*
1. 暴力求解
* 遍历text1 和 text2 的所有子序列，找出相同并一致的

2. 动态规划
a. 找重复子问题
* 先尝试从最小问题找起
* S1 = ...A 和 S2 = .....A 分解子问题，就是 前面的最大公共子序列 + A
b. 定义状态空间
dp[i][j]
c. 找状态方程式
S1 = "abcde", S2 = "ace" 
if S1[S1.length - 1] !== S2[S2.length - 1]  dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
if S1[S1.length - 1] === S2[S2.length - 1]  dp[i][j] = dp[i - 1][j - 1] + 1

*/
// @lc code=end

