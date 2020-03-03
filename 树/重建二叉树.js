/**
 * 根据前序遍历结果和中序遍历结果 重建二叉树。
 * 树的结构：
 * treeNode: {
 *      val,
 *      left,
 *      right
 * }
 */

/*
* 思路：根据前序和中序重新构造出二叉树，然后对二叉树进行后序遍历。
* 		构造二叉树：递归调用前序数组，取出第一个元素，然后根据其在中序数组的位置划分左右节点数组。
		后序遍历：  递归，左-右-中
*/

/**
 * 实例： 前序[1,2,4,7,3,5,6,8] 中序[4,7,2,1,5,3,8,6]
 * @param {Array} preOrder 前序结果
 * @param {Array} inOrder 中序结果
 */
function reConstructBinaryTree(preOrder, inOrder) {
    const resuleTree = new TreeNode();
    const rootVal = preOrder.shift();

    resuleTree.val = rootVal;
    // 左右子树的前序和中序结果
    const chlidOrder = sortRightLeft(rootVal, preOrder, inOrder);
    if (chlidOrder.inLeftArr.length > 0) {
        resuleTree.left = reConstructBinaryTree(chlidOrder.preLeftArr, chlidOrder.inLeftArr);
    }
    if (chlidOrder.inRightArr.length > 0) {
        resuleTree.right = reConstructBinaryTree(chlidOrder.preRightArr, chlidOrder.inRightArr);
    }

    return resuleTree;
}

/**
 * 根据根据根节点和中序结果，划分当前左右子树 (数组)
 * @param {*} rootVal 根节点值
 * @param {Array} preOrder 前序结果
 * @param {Array} inOrder 中序结果
 */
function sortRightLeft(rootVal, preOrder, inOrder) {
    const child_index = inOrder.indexOf(rootVal),
        inLeftArr = inOrder.slice(0, child_index),
        inRightArr = inOrder.slice(child_index + 1, inOrder.length),
        preLeftArr = preOrder.slice(0, inLeftArr.length),
        preRightArr = preOrder.slice(preLeftArr.length, preOrder.length);

    return {
        inLeftArr,
        inRightArr,
        preLeftArr,
        preRightArr
    }
}


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const test1 = reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]);
const test2 = reConstructBinaryTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]);

console.log(JSON.stringify(test1));
console.log('*********************')
console.log(JSON.stringify(test2));

module.exprots = {
    reConstructBinaryTree
};

/**
test1结果
{
    "val": 1,
    "left": {
        "val": 2,
        "left": {
            "val": 4,
            "left": null,
            "right": {
                "val": 7,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right ": {
        "val ": 3,
        "left ": {
            "val ": 5,
            "left ": null,
            "right ": null
        },
        "right ": {
            "val ": 6,
            "left ": {
                "val ": 8,
                "left ": null,
                "right ": null
            },
            "right": null
        }
    }
}
 */

/*
test2结果
{
    "val": 1,
    "left": {
        "val": 2,
        "left": {
            "val": 3,
            "left": null,
            "right": null
        },
        "right": {
            "val": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "val": 5,
        "left": {
            "val": 6,
            "left": null,
            "right": null
        },
        "right": {
            "val": 7,
            "left": null,
            "right": null
        }
    }
}
*/