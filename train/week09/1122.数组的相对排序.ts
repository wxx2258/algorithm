/*
 * @lc app=leetcode.cn id=1122 lang=typescript
 *
 * [1122] 数组的相对排序
 *
 * https://leetcode-cn.com/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (70.71%)
 * Likes:    177
 * Dislikes: 0
 * Total Accepted:    60.4K
 * Total Submissions: 85.4K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * 给你两个数组，arr1 和 arr2，
 * 
 * 
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 
 * 
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1
 * 的末尾。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * arr2 中的元素 arr2[i] 各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 * 
 * 
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  return arr1.sort((a, b) => {
    let ia = arr2.indexOf(a);
    let ib = arr2.indexOf(b);
    if(ia == -1 && ib == -1) {
        return a - b;
    } else if (ia == -1) {
        return 1;
    } else if (ib == -1) {
        return -1;
    } else {
        return ia-ib;
    }
  });
};

/*
1. 排序
https://leetcode-cn.com/problems/relative-sort-array/solution/huan-ge-si-lu-shi-yong-zi-dai-sorthan-shu-yi-chang/
2. hash
*/
// @lc code=end

