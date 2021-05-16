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