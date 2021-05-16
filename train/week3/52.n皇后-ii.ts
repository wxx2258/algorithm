/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (82.27%)
 * Likes:    254
 * Dislikes: 0
 * Total Accepted:    61.4K
 * Total Submissions: 74.7K
 * Testcase Example:  '4'
 *
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 4
 * 输出：2
 * 解释：如上图所示，4 皇后问题存在两个不同的解法。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 
 * 
 * 
 * 
 */

// @lc code=start
function totalNQueens(n: number): number {
  if (n < 1) 0
  const result: number[][] = []
  let cols = new Set(),
      pie = new Set(),
      na = new Set()
  DFS(n, 0, [])
  return result.length

  function DFS(n, row, cur_state) {
    if (row >= n) {
      result.push([...cur_state])
      return
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row - col) || na.has(row + col)) continue
      cols.add(col)
      pie.add(row - col)
      na.add(row + col)
      
      cur_state.push(col)
      DFS(n, row + 1, cur_state)
      cur_state.pop()

      cols.delete(col)
      pie.delete(row - col)
      na.delete(row + col)
    }
  }
};
// @lc code=end

