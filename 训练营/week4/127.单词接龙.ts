/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Hard (46.19%)
 * Likes:    743
 * Dislikes: 0
 * Total Accepted:    105.3K
 * Total Submissions: 227.7K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：
 * 
 * 
 * 序列中第一个单词是 beginWord 。
 * 序列中最后一个单词是 endWord 。
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典 wordList 中的单词。
 * 
 * 
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列
 * 中的 单词数目 。如果不存在这样的转换序列，返回 0。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log","cog"]
 * 输出：5
 * 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log"]
 * 输出：0
 * 解释：endWord "cog" 不在字典中，所以无法进行转换。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * endWord.length == beginWord.length
 * 1 
 * wordList[i].length == beginWord.length
 * beginWord、endWord 和 wordList[i] 由小写英文字母组成
 * beginWord != endWord
 * wordList 中的所有字符串 互不相同
 * 
 * 
 */

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  let wordListSet = new Set(wordList);
  if (!wordListSet.has(endWord)) {
    return 0;
  }
  let beginSet: Set<string> = new Set();
  beginSet.add(beginWord);
  let endSet: Set<string> = new Set();
  endSet.add(endWord)
  let level = 1;
  // BFS
  while (beginSet.size > 0) {
    let next_beginSet: Set<string> = new Set();
    for (let key of beginSet) {
      for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < 26; j++) {
          let s = String.fromCharCode(97 + j);
          if (s != key[i]) {
            let new_word = key.slice(0, i) + s + key.slice(i + 1);
            if (endSet.has(new_word)) {
              return level + 1;
            }
            if (wordListSet.has(new_word)) {
              next_beginSet.add(new_word);
              wordListSet.delete(new_word);
            }
          }
        }
      }
    }
    beginSet = next_beginSet;
    level++;
    if (beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet]
    }
  }
  return 0;
};

// 50


/*
1. 广度遍历
https://leetcode-cn.com/problems/word-ladder/solution/shou-hua-tu-jie-127-dan-ci-jie-long-bfsde-dian-x-2/
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList)
  const queue: [string, number][] = [[beginWord, 1]]
  const aCode = 'a'.charCodeAt(0)
  const zCode = 'z'.charCodeAt(0)
  while(queue.length) {
    const [word, level] = queue.shift()
    if (word === endWord) return level
    for (let i = 0; i < word.length; i++) {
      for (let c = aCode; c <= zCode; c++) {
        const newWord = `${word.slice(0, i)}${String.fromCharCode(c)}${word.slice(i + 1)}`
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1])
          wordSet.delete(newWord)
        }
      }
    }
  }
  return 0
};


2. 深度遍历 遍历出所有可以满足的情况，但这样无法提前结束
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  if(!endWord || !wordList.includes(endWord)) return 0
  const visited = {}
  let minLevel = Number.MAX_SAFE_INTEGER
  let level = 1
  recursion(beginWord, level)
  return minLevel
  function recursion(beginWord, level) {
    if (beginWord === endWord) {
      minLevel = Math.min(minLevel, level)
    }
    for (let i = 0; i < wordList.length; i++) {
      const tmpWord = wordList[i]
      let diff = 0
      for (let r = 0; r < tmpWord.length; r++) {
        if (beginWord[r] !== tmpWord[r]) {
          diff ++ 
          if (diff > 1) break
        }
      }
      if (diff === 1 && !visited[tmpWord]) {
        visited[tmpWord] = true
        recursion(tmpWord, level + 1)
        visited[tmpWord] = false
      }
    }
  }
};

3. 双端广度优先遍历

*/
// @lc code=end