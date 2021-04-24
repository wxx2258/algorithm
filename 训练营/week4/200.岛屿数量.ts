/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (53.29%)
 * Likes:    1117
 * Dislikes: 0
 * Total Accepted:    240.6K
 * Total Submissions: 449.9K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 的值为 '0' 或 '1'
 * 
 * 
 */

// @lc code=start
// function bfsHelper(grid: string[][], x, y, rows, cols) {
//   const queue: [number, number][] = [[x, y]]

//   while(queue.length) {
//     const [currentX, currentY] = queue.shift()
    
//     if (currentX < rows - 1 && grid[currentX + 1][currentY] === '1') {
//       grid[currentX + 1][currentY] = '0'
//       queue.push([currentX + 1, currentY])
//     }
//     if (currentX > 0 && grid[currentX - 1][currentY] === '1') {
//       grid[currentX - 1][currentY] = '0'
//       queue.push([currentX - 1, currentY])
//     }
//     if (currentY < cols - 1 && grid[currentX][currentY + 1] === '1') {
//       grid[currentX][currentY + 1] = '0'
//       queue.push([currentX, currentY + 1])
//     }

//     if (currentY > 0 && grid[currentX][currentY - 1] === '1') {
//       grid[currentX][currentY - 1] = '0'
//       queue.push([currentX, currentY - 1])
//     }
//   }
// }
function dfsHelper(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === "0")
    return;

  grid[i][j] = "0";

  dfsHelper(grid, i + 1, j, rows, cols);
  dfsHelper(grid, i, j + 1, rows, cols);
  dfsHelper(grid, i - 1, j, rows, cols);
  dfsHelper(grid, i, j - 1, rows, cols);
}

function numIslands(grid: string[][]): number {
  let count = 0
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        dfsHelper(grid ,i, j, rows, cols)
        // bfsHelper(grid ,i, j, rows, cols)
        count ++
      }
    }
  }
  return count
};

// 1. 遍历，遇到陆地时，深度(广度 超过了时间限制)遍历其所有相连的陆地，并置为0，岛屿数量 + 1
// @lc code=end

