/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.53%)
 * Likes:    945
 * Dislikes: 0
 * Total Accepted:    140.9K
 * Total Submissions: 284.6K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回滑动窗口中的最大值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,-1], k = 1
 * 输出：[1,-1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [9,11], k = 2
 * 输出：[11]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [4,-2], k = 2
 * 输出：[4]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * 1 
 * 
 * 
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  function max(num:number, queue: number[]) {
    while(num > queue[queue.length - 1]) queue.pop()
    return num
  }

  let queue = [],
      res = new Array(nums.length - k + 1),
      i = -1;
  while(++i < k) {
    queue.push(max(nums[i], queue))
  }
  while(++i < nums.length) {
    queue.push(max(nums[i], queue))
    if (queue[0] === nums[i - k]) queue.shift()
    res[i - k + 1] = queue[0]
  }
  return res
};


// 50

/*
1. 暴力求解
外层遍历 + K数组遍历 + 比较大小
2. 优先，大顶堆
function maxSlidingWindow(nums: number[], k: number): number[] {
  // LeetCode实现的js大根堆 MaxPriorityQueue，优先权重参数必须为正数
  let maxPriorityQueue = new MaxPriorityQueue,
      res = new Array(nums.length - k + 1),
      i = -1
  while (++i < k) maxPriorityQueue.enqueue(i, nums[i] + 10001)
  res[0] = maxPriorityQueue.front().priority - 10001, i--
  while (++i < nums.length) {
      maxPriorityQueue.enqueue(i, nums[i] + 10001)
      while (maxPriorityQueue.front().element <= i - k) {
        maxPriorityQueue.dequeue()
      }
      res[i - k + 1] = maxPriorityQueue.front().priority - 10001
  }
  return res
};
3. 双端
3.1 列队存值
function maxSlidingWindow(nums: number[], k: number): number[] {
  function max(num:number, queue: number[]) {
    while(num > queue[queue.length - 1]) queue.pop()
    return num
  }

  let queue = [],
      res = new Array(nums.length - k + 1),
      i = -1;
  while(++i < k) {
    queue.push(max(nums[i], queue))
  }
  while(++i < nums.length) {
    queue.push(max(nums[i], queue))
    if (queue[0] === nums[i - k]) queue.shift()
    res[i - k + 1] = queue[0]
  }
  return res
};
4. 分块
* 待研究
*/
// @lc code=end

