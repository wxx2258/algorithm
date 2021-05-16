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
