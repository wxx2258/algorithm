/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (52.19%)
 * Likes:    399
 * Dislikes: 0
 * Total Accepted:    185.5K
 * Total Submissions: 355.5K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 
 * 
 * 示例：
 * 
 * s = "leetcode"
 * 返回 0
 * 
 * s = "loveleetcode"
 * 返回 2
 * 
 * 
 * 
 * 
 * 提示：你可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
function firstUniqChar(s: string): number {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i
  }
  return -1
};

/*
1. 暴力
2. hash
*/
// @lc code=end

