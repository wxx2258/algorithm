## todo list
* 单词接龙 II 
* 扫雷游戏
* 跳跃游戏 
* 跳跃游戏 II 

## 二分查找
``` JavaScript
function binarySearch(array) {
  let left = 0, right = array.length - 1

  while(left <= right) {
    let mid = (left + right) >> 1
    if (array[mid] === target) {
      // find the target
      return
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      right = mid + 1
    }
  }
}
```
## dfs
``` JavaScript
//JavaScript 层序遍历的广度优先
const bfs = (root) => {  
  let result = [], queue = [root]  
  while (queue.length > 0) {    
    let level = [], n = queue.length    
    for (let i = 0; i < n; i++) {      
      let node = queue.pop()      
      level.push(node.val)       
      // if (node.left) queue.unshift(node.left)
      // if (node.right) queue.unshift(node.right)  
      for (let childIndex = 0; childIndex < node.children.length; childIndex++) {
        queue.unshift(node.children[childIndex])
      }  
    }    
    result.push(level)  
  }  
  return result
};

// 一维数组的遍历
const bfs2 = (root) => {
  let result = [], queue = [root]
  while(queue.length) {
    const node = queue.shift()
    result.push(node.val)
    for (let i = 0; i < node.children.length; i++) {
      queue.push(node.children[i])
    }
  }
  return result
}

```

## bfs

``` JavaScript
// recursion
const visited = new Set()
function dfsRecursion(node) {
  if (node === null || visited.has(node)) return
  visited.add(node)
  // dfsRecursion(node.left)
  // dfsRecursion(node.right)
  for (let i = 0; i < node.children.length; i++) {
    dfsRecursion(node.children[i])
  }
}


// iteration
function dfsIteration(node) {
  const visited = new Set()
  if (!root) return
  const stack = [node]

  while(!!stack.length) {
    const top = stack.pop()
    if (top === null || visited.has(top)) continue;    
    visited.add(top)    
    for (let i = top.children.length - 1; i >= 0; --i) {       
       stack.push(top.children[i]);   
    }
  }
}
```

