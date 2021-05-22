/*
 * @lc app=leetcode.cn id=773 lang=typescript
 *
 * [773] 滑动谜题
 *
 * https://leetcode-cn.com/problems/sliding-puzzle/description/
 *
 * algorithms
 * Hard (63.58%)
 * Likes:    132
 * Dislikes: 0
 * Total Accepted:    8.4K
 * Total Submissions: 13.1K
 * Testcase Example:  '[[1,2,3],[4,0,5]]'
 *
 * 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.
 * 
 * 一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.
 * 
 * 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。
 * 
 * 给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。
 * 
 * 示例：
 * 
 * 
 * 输入：board = [[1,2,3],[4,0,5]]
 * 输出：1
 * 解释：交换 0 和 5 ，1 步完成
 * 
 * 
 * 
 * 输入：board = [[1,2,3],[5,4,0]]
 * 输出：-1
 * 解释：没有办法完成谜板
 * 
 * 
 * 
 * 输入：board = [[4,1,2],[5,0,3]]
 * 输出：5
 * 解释：
 * 最少完成谜板的最少移动次数是 5 ，
 * 一种移动路径:
 * 尚未移动: [[4,1,2],[5,0,3]]
 * 移动 1 次: [[4,1,2],[0,5,3]]
 * 移动 2 次: [[0,1,2],[4,5,3]]
 * 移动 3 次: [[1,0,2],[4,5,3]]
 * 移动 4 次: [[1,2,0],[4,5,3]]
 * 移动 5 次: [[1,2,3],[4,5,0]]
 * 
 * 
 * 
 * 输入：board = [[3,2,4],[1,5,0]]
 * 输出：14
 * 
 * 
 * 提示：
 * 
 * 
 * board 是一个如上所述的 2 x 3 的数组.
 * board[i][j] 是一个 [0, 1, 2, 3, 4, 5] 的排列.
 * 
 * 
 */

// @lc code=start
function slidingPuzzle(board: number[][]): number {
  let moves = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4]
  }
  const used = new Set()
  let cnt = 0,
      s = '';
  board.forEach(item=> {
    s += item.join('')
  })
  let queue: [string, number][] = [[s, s.indexOf('0')]]
  while (queue.length) {
    let next = [];
    for (const [s, i] of queue) {
      used.add(s)
      if (s === '123450') return cnt
      for (const move of moves[i]) {
        let arr = s.split('')
        let temp = arr[i]
        arr[i] = arr[move]
        arr[move] = temp
        const new_s = arr.join('')
        if (!used.has(new_s)) {
          next.push([new_s, move])
        }
      }
    }
    cnt += 1
    queue = next
  }
  return - 1
};


// 50

/*
1. BFS
function slidingPuzzle(board: number[][]): number {
  let moves = {
    0: [1, 3],
    1: [0, 2, 4],
    2: [1, 5],
    3: [0, 4],
    4: [1, 3, 5],
    5: [2, 4]
  }
  const used = new Set()
  let cnt = 0,
      s = '';
  board.forEach(item=> {
    s += item.join('')
  })
  let queue: [string, number][] = [[s, s.indexOf('0')]]
  while (queue.length) {
    let next = [];
    for (const [s, i] of queue) {
      used.add(s)
      if (s === '123450') return cnt
      for (const move of moves[i]) {
        let arr = s.split('')
        let temp = arr[i]
        arr[i] = arr[move]
        arr[move] = temp
        const new_s = arr.join('')
        if (!used.has(new_s)) {
          next.push([new_s, move])
        }
      }
    }
    cnt += 1
    queue = next
  }
  return - 1
};
2. A*
*/
// @lc code=end

