class UnionFind {
  parents: any[]
  constructor(n) {
    this.parents = new Array()
    while (n--) {
      this.parents[n] = n
    }
  }
  union(x, y) {
    const rootX = this.find(x), rootY = this.find(y)
    if (rootX !== rootY) this.parents[rootX] = rootY
  }
  find(x) {
    let root = x
    while (root !== this.parents[root]) {
      root = this.parents[root]
    }
    // 路径压缩
    while (this.parents[x] !== x) {
      let temp = x
      x = this.parents[x]
      this.parents[temp] = root
    }
    return root
  }
}