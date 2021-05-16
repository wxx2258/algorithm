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