/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (63.67%)
 * Likes:    366
 * Dislikes: 0
 * Total Accepted:    221.3K
 * Total Submissions: 347.2K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  //  利用高阶函数来进行遍历，不断传递 Map
  return s.length === t.length && 
    Array.from(
        Array.from(s)
          .reduce((h, v, i) => {
            h.set(v, (h.get(v) || 0) + 1);
            h.set(t[i], (h.get(t[i]) || 0) - 1);
            return h
          }, new Map())
        .values()
    )
    .every(v => !v)
}
// 50%





/*
1. 暴力求解
两层循环
1.1 直接sort一次，然后进行对比
function isAnagram(s: string, t: string): boolean {
  return JSON.stringify(s.split('').sort()) === JSON.stringify(t.split('').sort())
};
2. 先排序，后hash存储 O(nlogn + n)
2.1 Map 做 hash
2.2 array 建立一个 table 做 hash
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const hash = new Map()

  let len = s.length
  for (let i = 0; i < len; i++) {
    if (!hash.has(s[i])) hash.set(s[i], 0)
    if (!hash.has(t[i])) hash.set(t[i], 0)
    hash.set(s[i], hash.get(s[i]) + 1)
    hash.set(t[i], hash.get(t[i]) - 1)
  }

  return Array.from(hash.values()).every(item=> {
    return item === 0
  })
};
2.3 用reduce 极简代码实现
*/
// @lc code=end

