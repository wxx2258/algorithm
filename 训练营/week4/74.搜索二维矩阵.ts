/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (44.44%)
 * Likes:    429
 * Dislikes: 0
 * Total Accepted:    133.7K
 * Total Submissions: 300K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -10^4 
 * 
 * 
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let outerLeft = 0, outerRight = matrix.length - 1
  while (outerLeft <= outerRight) {
    const outerMid = (outerLeft + outerRight) >> 1
    if (matrix[outerMid][0] <= target && target <= matrix[outerMid][matrix[outerMid].length - 1]) {
      let left = 0, right = matrix[outerMid].length - 1
      while (left <= right) {
        let mid = (left + right) >> 1
        if (matrix[outerMid][mid] === target) {
          return true
        } else if (matrix[outerMid][mid] > target) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      break;
    } else if (matrix[outerMid][0] > target) {
      outerRight = outerMid - 1
    } else {
      outerLeft = outerMid + 1
    }
  }
  return false
};

// 50

/*
1. 暴力
2. 二分查找  二分 * 二分
* 先二分找到应该在哪个一维数组里面，在二分找到其所在位置
function searchMatrix(matrix: number[][], target: number): boolean {
  let outerLeft = 0, outerRight = matrix.length - 1
  while (outerLeft <= outerRight) {
    const outerMid = (outerLeft + outerRight) >> 1
    if (matrix[outerMid][0] <= target && target <= matrix[outerMid][matrix[outerMid].length - 1]) {
      let left = 0, right = matrix[outerMid].length - 1
      while (left <= right) {
        let mid = (left + right) >> 1
        if (matrix[outerMid][mid] === target) {
          return true
        } else if (matrix[outerMid][mid] > target) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      break;
    } else if (matrix[outerMid][0] > target) {
      outerRight = outerMid - 1
    } else {
      outerLeft = outerMid + 1
    }
  }
  return false
};
3. 一次二分查找
* 把二维看成一维数组，然后进行二分
*/
// @lc code=end

