/*
 * @lc app=leetcode.cn id=212 lang=typescript
 *
 * [212] 单词搜索 II
 *
 * https://leetcode-cn.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (45.44%)
 * Likes:    389
 * Dislikes: 0
 * Total Accepted:    35.2K
 * Total Submissions: 77.4K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n' +
  '["oath","pea","eat","rain"]'
 *
 * 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
 * 
 * 单词必须按照字母顺序，通过 相邻的单元格
 * 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：board =
 * [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
 * words = ["oath","pea","eat","rain"]
 * 输出：["eat","oath"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：board = [["a","b"],["c","d"]], words = ["abcb"]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == board.length
 * n == board[i].length
 * 1 
 * board[i][j] 是一个小写英文字母
 * 1 
 * 1 
 * words[i] 由小写英文字母组成
 * words 中的所有字符串互不相同
 * 
 * 
 */

// @lc code=start
class TrieNode {
  [key: string]: any
  end: boolean
}
class Trie {
  tree: TrieNode
  constructor() {
      this.tree = Object.create(null)
  }

  insert(word: string): void {
      let tree = this.tree
      for (const w of word) {
          if (!tree[w]) tree[w] = Object.create(null)
          tree = tree[w]
      }
      tree.end = true
  }

  search(word: string): boolean {
      let tree = this.tree
      for (const w of word) {
          if (!tree[w]) return false
          tree = tree[w]
      }
      return !!tree.end
  }

  startsWith(prefix: string): boolean {
      let tree = this.tree
      for (const w of prefix) {
          if (!tree[w]) return false
          tree = tree[w]
      }
      return true 
  }
}
function findWords(board: string[][], words: string[]): string[] {
  let m = board.length
  let n = board[0].length

  let wordsTrie = new Trie()
  for (const word of words) {
    wordsTrie.insert(word)
  }
  let result = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      boardDfs(i, j, '', wordsTrie.tree)
    }
  }
  return result


  function boardDfs(i, j, curStr, curNode: TrieNode) {
    if (curNode.end) {
      result.push(curStr)
      curNode.end = false // 已经找到，防止重复
    }
    // 中止条件
    if (i < 0 || j < 0 || i === m || j === n) return
    const restore = board[i][j]

    // 减枝
    if (restore === '#' || !curNode[restore]) return
    // 前进
    board[i][j] = '#'
    curStr += restore

    boardDfs(i, j - 1, curStr, curNode[restore])
    boardDfs(i, j + 1, curStr, curNode[restore])
    boardDfs(i - 1, j, curStr, curNode[restore])
    boardDfs(i + 1, j, curStr, curNode[restore])

    // 回溯
    board[i][j] = restore
  }
};


// 50
/*
1. 遍历数组，再BFS 广度优先遍历找到结果
2. 字典树
* 先构建字典树
* DFS遍历
https://leetcode-cn.com/problems/word-search-ii/solution/212-dan-ci-sou-suo-ii-by-alexer-660/
*/
// @lc code=end

