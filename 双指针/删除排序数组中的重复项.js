/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
* 通过遍历，计算重复个数，将长度减去重复个数，得到非重复个数。
* 遍历过程，如果当前元素不等于上一个元素，通过 i-count（当前位置往前移动重复个数） 定位当前非重复指针，并赋值。
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
    let count = 0;
    const len = nums.length;

    for (let index = 0; index < len; index++) {
        if (nums[index] !== nums[index - 1]) {
            nums[index - count] = nums[index];
        } else {
            count ++;
        }
    }
    return len - count;
}

/**
  * 双指针：
  * 增加一个 是重复元素且是第一次出现的位置指针 r 默认初始化为 0 ，数组遍历从 i = 1 开始
    * 当遇到不一致的元素，更新指针位置为下一个元素。并将指针位置的值改为当前遍历的值
    * 如果值相同，则不作任何操作。
  * @param {number[]} nums
  * @return {number}
  */
 var removeDuplicates = function(nums) {
    let j = 0;
    let n = nums.length;
    for(let i = 1; i < n; i++){
        if(nums[i] !== nums[i - 1]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};
