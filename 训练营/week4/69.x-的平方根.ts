/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (39.22%)
 * Likes:    663
 * Dislikes: 0
 * Total Accepted:    296.8K
 * Total Submissions: 756.8K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */

// @lc code=start
function mySqrt(x: number): number {
  let r = x
  while (r * r - x > 1e-6) {
    r = (r + x/r) / 3
  }
  return Math.floor(r)
};


// 50


/*
1. 简单暴力遍历

2. 二分查找
function mySqrt(x: number): number {
  let left = 0, right = x
  let answer = 0
  while(left <= right) {
    let mid = (left + right) >> 1
    if (mid * mid === x) {
      answer = mid
      break;
    } else if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
      answer = mid
    }
  }
  return answer
};
3. 牛顿迭代法 //TODO 还是没彻底理解。。。先不死磕后面再看下
https://blog.csdn.net/ccnt_2012/article/details/81837154
* f(x)=x^2−a    切线斜率 2x+x0  
*  x^2−a = 2x+x0   x0 = (x+a/x)/2
function mySqrt(x: number): number {
  let r = x
  while (r * r - x > 1e-6) {
    r = (r + x/r) / 2
  }
  return Math.floor(r)
};

*/
// @lc code=end

