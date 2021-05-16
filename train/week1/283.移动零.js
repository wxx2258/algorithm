/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/*
* @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/ 
var moveZeroes = function(nums){
  var zeroIndex = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (zeroIndex < i) {
        // 如果两个指针位置一致，无需操作
        nums[zeroIndex] = nums[i]
        nums[i] = 0
      }
      zeroIndex ++
    }
  }
}

// @lc code=end
// 20%
/* 
1. 遍历一次，遇到0删除元素，并且统计0出现次数，在最后面加上0
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 var moveZeroes = function(nums) {
  let zeroCount = 0
  let i = 0
  while(i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeroCount ++
    } else {
      i ++
    }
  }
  while(zeroCount > 0) {
    nums.push(0)
    zeroCount --
  }
  return nums
};
2. 新开一个数组，遍历一遍，遇到非0放入，并统计0出现次数，最后加入0
3. 指针记录当前位置，遍历数组进行交换
var moveZeroes = function(nums){
  var zeroIndex = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (zeroIndex < i) {
        // 如果两个指针位置一致，无需操作
        nums[zeroIndex] = nums[i]
        nums[i] = 0
      }
      zeroIndex ++
    }
  }
  return nums
}
var moveZeroes = function(nums){
  var l = 0, r = -1
  while(r++ < nums.length) {
    if (nums[r]) {
      nums[l] === 0 && ([nums[l], nums[r]] = [nums[r], nums[l]])
      l++
    }
  }
}

4. sort方法
var moveZeroes = function(nums){
  nums.sort((a,b)=> b ? 0 : -1)
}
*/