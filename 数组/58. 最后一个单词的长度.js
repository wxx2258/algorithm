/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0;
    let flag = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (flag) {
                len = 1;
                flag = false;
            } else {
                len ++;
            }
        } else {
            flag = true;
        }
    }
    return len;
};
// var lengthOfLastWord = function(s) {
//     const arr = s.trim().split(' ');

//     return arr.length > 0 ? arr[arr.length - 1].length : 0;
// };

// 解题思路
// 我看到题目就想到是数组处理
/**
 * 思路一：（工作中实际更能多会用这样的方法实现，所以顺手写了一下）
 * 1. 直接通过原生api的方法，通过 String.prototype.trim 和 String.prototpe.split 转换为一个数组
 * 2. 转换后得到一个存储字母的数组，获取最后一个元素的长度
 * 思路二：
 * 1. 设置一个标记flag，标记是否重新开始计数
 * 2. 通过O(n)的时间复杂度，进行一次遍历，遍历过程中判断s[i]是否不等于 ‘ ’
 * 3. 如果s[i]等于‘ ’，则设置标记flag为true。说明当前统计的长度有可能不是最后一个字母的长度
 * 4. 如果s[i]不等于 ' '，判断flag，如果为true，则设len为1重新计数且将flag设为false。如果为false，len++累积计数。
 * 5. 重复2知道遍历完整个数组
 * 时间复杂度O(n)，空间复杂度为O(1)
 */