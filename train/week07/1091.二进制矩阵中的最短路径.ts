/*
 * @lc app=leetcode.cn id=1091 lang=typescript
 *
 * [1091] 二进制矩阵中的最短路径
 *
 * https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/description/
 *
 * algorithms
 * Medium (37.08%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    19.4K
 * Total Submissions: 52.2K
 * Testcase Example:  '[[0,1],[1,0]]'
 *
 * 给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。
 * 
 * 二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n -
 * 1)）的路径，该路径同时满足下述要求：
 * 
 * 
 * 路径途经的所有单元格都的值都是 0 。
 * 路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
 * 
 * 
 * 畅通路径的长度 是该路径途经的单元格总数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [[0,1],[1,0]]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
 * 输出：-1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 为 0 或 1
 * 
 * 
 */

// @lc code=start
function shortestPathBinaryMatrix(grid: number[][]): number {
  let caculatef = (x, y, d) => {
    return Math.max(d-x,d-y)
  }
  //使每次插入最后面的值，找到它对应的权值位置
  let resetQueue = () => {
    let len = queue.length
    if (len < 2) return
    let item = queue[queue.length - 1]
    for (let i = 0; i < len - 1; i++) {
        if (queue[i][2] > item[2]) {
            queue.splice(i, 0, item)
            queue.pop()
            break
        }
    }
  }
  let len = grid.length
  if (grid[0][0] == 1 || grid[len - 1][len - 1] == 1) return -1
  if (len == 1) return 1
  let dis = 2
  //这里的值随便赋值都可以，因为第一个估值没意义。
  let queue = [
      [0, 0, 0, dis]
  ]
  grid[0][0] = 1
  while (queue.length) {
      let item = queue.shift()
      for (let i of [
              [item[0] - 1, item[1]],
              [item[0], item[1] - 1],
              [item[0] + 1, item[1]],
              [item[0], item[1] + 1],
              [item[0] - 1, item[1] - 1],
              [item[0] - 1, item[1] + 1],
              [item[0] + 1, item[1] + 1],
              [item[0] + 1, item[1] - 1]
          ]) {
          // 验证合法性
          if (i[0] >= 0 && i[0] < len && i[1] >= 0 && i[1] < len && grid[i[0]][i[1]] != 1) {
              // 找到对的
              if (i[0] == len - 1 && i[1] == len - 1) {
                  return item[3]
              }
              // 没找到就入队列
              // item[3]就是层数，权值是：层数+估算函数的值
              i.push(caculatef(i[0], i[1], len - 1) + item[3])
              i.push(item[3] + 1)
              queue.push(i)
              resetQueue()
          }

      }
      //当前节点走过之后堵上
      grid[item[0]][item[1]] = 1
  }
  return -1
};

// 50
/*
1. 暴力搜索BFS
2. 动态规划
3. 启发式搜索
*/
// @lc code=end

