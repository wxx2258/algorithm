/**
 * 深度遍历二叉树
 * @param {*} tree 
 */
function wideTraversal(tree) {
    const nodes = [];
    if(tree !== null) {
        nodes.push(tree.val);
        wideTraversal(tree.left);
        wideTraversal(tree.right);
        if (tree.left !== null) {
            
        }
    }
    return nodes;
}

const testRoot = {
    val: 1,
    left: {
        val: 3,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}

console.log(wideTraversal(testRoot));
