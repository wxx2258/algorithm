/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 *
 * https://leetcode-cn.com/problems/ugly-number-ii/description/
 *
 * algorithms
 * Medium (55.45%)
 * Likes:    508
 * Dislikes: 0
 * Total Accepted:    49.4K
 * Total Submissions: 88.7K
 * Testcase Example:  '10'
 *
 * 编写一个程序，找出第 n 个丑数。
 * 
 * 丑数就是质因数只包含 2, 3, 5 的正整数。
 * 
 * 示例:
 * 
 * 输入: n = 10
 * 输出: 12
 * 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
 * 
 * 说明:  
 * 
 * 
 * 1 是丑数。
 * n 不超过1690。
 * 
 * 
 */

// @lc code=start
class MinHeap {
  heap: number[]
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return (i - 1) >> 1
  }
  getLeftIndex(i) {
    return i * 2 + 1
  }
  getRightIndex(i) {
    return i * 2 + 2
  }
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }

  // 向上移动，调整最小堆
  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return this.heap[0]
  }

  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
function nthUglyNumber(n: number): number {
  const factors = [2, 3, 5]
  const set = new Set()
  const heap = new MinHeap
  set.add(1)
  heap.insert(1)
  let ugly = 0
  for (let i = 0; i < n; i++) {
    ugly = heap.pop()
    for (const factor of factors) {
      const next = ugly * factor
      if (!set.has(next)) {
        set.add(next)
        heap.insert(next)
      }
    }    
  }
  return ugly
};

// 50%
/*
1. 暴力求解
function nthUglyNumber(n: number): number {
  function isUgly(n: number): boolean {
    if (n < 1) return false;
    [2, 3, 5].map(item=> {
      while(n % item === 0) n = n / item
    })
    return n === 1
  };
  let count = 0
  let num = 0
  while(count < n) {
    num ++
    if (isUgly(num)) {
      count ++
    }
  }
  return num
};
2. 最小堆，
* 初始时堆为空，首先将最小的丑数 1 加入堆
* 每次去除堆顶元素 x ，则 x 是堆中最小的丑数，由于 2x，3x, 5x 也是丑数，因此将 2x,3x,5x 加入堆。
* 因此，第 n 次从最小堆去除的元素，就是 第 n 个丑数

3. 动态规划
// 后续待搞懂
*/
// @lc code=end

