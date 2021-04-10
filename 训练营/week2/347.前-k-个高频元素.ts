/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (61.92%)
 * Likes:    715
 * Dislikes: 0
 * Total Accepted:    149K
 * Total Submissions: 240.4K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [1], k = 1
 * 输出: [1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 * 
 * 
 */

// @lc code=start
class MinHeap {
  heap: any[]
  compareFn: (a,b)=> Boolean
  constructor(compareFn?: (a,b)=> Boolean) {
    this.compareFn = compareFn || function(a, b){
      return a < b
    }
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
    if (this.compareFn(this.heap[index], this.heap[parentIndex])) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] && this.compareFn(this.heap[leftIndex], this.heap[index])) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] && this.compareFn(this.heap[rightIndex], this.heap[index])) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  pop() {
    const min = this.heap[0]
    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop()
      this.shiftDown(0)
    } else {
      this.heap.pop()
    }
    return min
  }

  peek() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
function topKFrequent(nums: number[], k: number): number[] {
  const hash: Map<number, number> = new Map()
  nums.forEach((item)=> {
    if (!hash.has(item)) {
      hash.set(item, 1)
    } else {
      hash.set(item, hash.get(item) + 1)
    }
  })
  const minHeap = new MinHeap((a: [number, number], b:[number, number])=> {
    return a[1] < b[1]
  })
  for (const entry of hash.entries()) {
    const [, times] = entry
    const [, minTimes] = minHeap.peek() || [, 0]
    if (minHeap.size() < k) {
      minHeap.insert(entry)
    } else if(minHeap.size() === k && times > minTimes) {
      minHeap.pop()
      minHeap.insert(entry)
    }
  }
  const res = []
  while (k-- > 0) {
    const temp = minHeap.pop()
    res[k] = temp[0]
  }
  return res
};

//50

/*
1. 暴力如何求解，一次遍历，利用 hash 计数和存储出现次数，最后排序hash并取出前 K 个
function topKFrequent(nums: number[], k: number): number[] {
  const hash: Map<number, number> = new Map()
  const arr = [...new Set(nums)]
  nums.forEach((item)=> {
    if (!hash.has(item)) {
      hash.set(item, 1)
    } else {
      hash.set(item, hash.get(item) + 1)
    }
  })
  return arr.sort((a, b) => hash.get(b) - hash.get(a)).slice(0, k);
};
2. 存储次数，然后在用小顶堆去取出前 K 个
*/
// @lc code=end

