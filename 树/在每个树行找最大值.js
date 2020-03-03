/**
 * [1,3,2,5,3,null,9]
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
 * 实现思路：
 * 遍历每一行，获取每一行的最大值。存储到结果数组中
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) return [];

    let arr = [];
    let fn = (nodeArr) => {
        let lineMax;
        let nextLevelNodes = [];
        nodeArr.forEach(node => {
            if (lineMax === undefined || lineMax < node.val) {
                lineMax = node.val;
            }
            if(node.left){
                nextLevelNodes.push(node.left);
            }
            if(node.right){
                nextLevelNodes.push(node.right);
            }
        });
        arr.push(lineMax);
        if (nextLevelNodes.length) {
            return fn(nextLevelNodes);
        } else {
            return arr;
        }
    }
    return fn([root]);
};

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

console.log(largestValues(testRoot));

module.exprots = {
    largestValues
}