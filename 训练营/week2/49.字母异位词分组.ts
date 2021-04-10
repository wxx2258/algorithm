/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (65.58%)
 * Likes:    707
 * Dislikes: 0
 * Total Accepted:    178.7K
 * Total Submissions: 272.2K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    const aCharCode = 'a'.charCodeAt(0)
    strs.forEach(item=> {
      const count = new Array(26).fill(0)

      for (const c of item) {
        count[c.charCodeAt(0) - aCharCode]++
      }
      const key = JSON.stringify(count)
      if (map.has(key)) {
        map.set(key, [...map.get(key), item])
      } else {
        map.set(key, [item])
      }
    })
    return Array.from(map.values())
};


// 50%

/*
1. 一个hash加一次遍历 和 sort
function groupAnagrams(strs: string[]): string[][] {
    const hashTable: Map<string, string[]> = new Map()
    function strSort(str) {
      return Array.from(str).sort().join('')
    }

    strs.forEach(item=> {
      const sortKey = strSort(item)
      if (hashTable.has(sortKey)) {
        hashTable.set(sortKey, [...hashTable.get(sortKey), item])
      } else {
        hashTable.set(sortKey, [item])
      }
    })
    return Array.from(hashTable.values())
};
2. 计数 
* 一个hash ， 一次遍历， k个计数
3. 质数
*/
// @lc code=end

