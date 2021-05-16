/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (54.81%)
 * Likes:    2217
 * Dislikes: 0
 * Total Accepted:    223.3K
 * Total Submissions: 404.8K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 0 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0
  let left = 0, right = height.length - 1
  let leftMax = 0, rightMax = 0

  while(left < right) {
    leftMax = Math.max(height[left], leftMax)
    rightMax = Math.max(height[right], rightMax)
  
    if (height[left] < height[right]) {
      // height[left] < height[right] 说明对于left来说，height一定可以成为一个右边界了
      sum += leftMax - height[left]
      left ++
    } else {
      sum += rightMax - height[right]
      right --
    }
  }
  return sum
};

// 50%







/*
1. 暴力求解
* 从左到右遍历每一个柱子，然后找到左右最高，看这个柱子能存储多少水
* 相当于是从把所有最大高度相加 O(n^2)
var trap = function(height) {
  let sum = 0

  for (let i = 1; i < height.length; i++) {
    let left = i - 1, right = i + 1
        maxLeft = height[i], maxRight = height[i]
    while(left >= 0) {
      maxLeft = Math.max(maxLeft, height[left])
      left --
    }
    while (right < height.length) {
      maxRight = Math.max(maxRight, height[right])
      right ++
    }
    sum += Math.min(maxLeft, maxRight) - height[i]
  }
  return sum
};
1.1 对暴力求解的优化，（动态规划），
* 先遍历存储下每个元素MaxLeft 和 MaxRight
* 在重新遍历一遍按列的方式求解

var trap = function(height) {
  let sum = 0
  let maxRightArr = [], maxLeftArr = []
  const len = height.length

  maxRightArr[0] = height[0]
  for (let rightIndex = 1; rightIndex < len; rightIndex++) {
    maxRightArr[rightIndex] = Math.max(maxRightArr[rightIndex - 1], height[rightIndex])
  }
  maxLeftArr[len - 1] = height[len - 1]
  for (let leftIndex = len - 2; leftIndex >= 0; leftIndex--) {
    maxLeftArr[leftIndex] = Math.max(maxLeftArr[leftIndex + 1], height[leftIndex])
  }

  for (let i = 1; i < len - 1; i++) {
    sum += Math.min(maxRightArr[i], maxLeftArr[i]) - height[i]
  }

  return sum
};

1.2 双指针，对空间进一步优化，从 O(n) 到 O（1）
* 双指针夹逼，同时存储左右最大值
* 在双指针夹逼的过程中，将结果一步一步计算出来

var trap = function(height) {
  let sum = 0
  let left = 0, right = height.length - 1
  let leftMax = 0, rightMax = 0

  while(left < right) {
    leftMax = Math.max(height[left], leftMax)
    rightMax = Math.max(height[right], rightMax)
  
    if (height[left] < height[right]) {
      // height[left] < height[right] 说明对于left来说，height一定可以成为一个右边界了
      sum += leftMax - height[left]
      left ++
    } else {
      sum += rightMax - height[right]
      right --
    }
  }
  return sum
};

2. 单调栈
* 利用递减栈，在水平方向上计算可以接收的水 O(n)
var trap = function(height) {
  let sum = 0
  let stack = []

  for (let i = 0; i < height.length; i++) {
    while(stack.length && height[stack[0]] < height[i]) {
      const top = stack.shift()
      if (!stack.length) break

      const left = stack[0]
      const currentHeight = Math.min(height[left], height[i]) - height[top]
      const currentWidth = i - left - 1

      sum += currentHeight * currentWidth
    }
    stack.unshift(i)
  }
  return sum
};

3. 数学公式 
时间复杂度：O(n)
空间复杂度：O(1)
（https://leetcode-cn.com/problems/trapping-rain-water/solution/wei-en-tu-jie-fa-zui-jian-dan-yi-dong-10xing-jie-j/）
var trap = function(height) {
  let heightSum = 0
  let maxLeftArea = 0, maxRightArea = 0,
      maxLeftHeight = 0, maxRightHeight = 0
  const len = height.length

  for (let i = 0; i < len; i++) {
    if (height[i] > maxRightHeight) {
      maxRightHeight = height[i]
    }
    if (height[len - 1 - i] > maxLeftHeight) {
      maxLeftHeight = height[len - 1 - i]
    }
    maxRightArea += maxRightHeight
    maxLeftArea += maxLeftHeight
    heightSum += height[i]
  }
  return maxRightArea + maxLeftArea - (maxLeftHeight * len) - heightSum
};



*/
// @lc code=end

