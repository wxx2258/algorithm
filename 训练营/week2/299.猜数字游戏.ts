/*
 * @lc app=leetcode.cn id=299 lang=typescript
 *
 * [299] 猜数字游戏
 *
 * https://leetcode-cn.com/problems/bulls-and-cows/description/
 *
 * algorithms
 * Medium (49.79%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    25.2K
 * Total Submissions: 50.5K
 * Testcase Example:  '"1807"\n"7810"'
 *
 * 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：
 * 
 * 
 * 你写出一个秘密数字，并请朋友猜这个数字是多少。
 * 朋友每猜测一次，你就会给他一个提示，告诉他的猜测数字中有多少位属于数字和确切位置都猜对了（称为“Bulls”,
 * 公牛），有多少位属于数字猜对了但是位置不对（称为“Cows”, 奶牛）。
 * 朋友根据提示继续猜，直到猜出秘密数字。
 * 
 * 
 * 请写出一个根据秘密数字和朋友的猜测数返回提示的函数，返回字符串的格式为 xAyB ，x 和 y 都是数字，A 表示公牛，用 B 表示奶牛。
 * 
 * 
 * xA 表示有 x 位数字出现在秘密数字中，且位置都与秘密数字一致。
 * yB 表示有 y 位数字出现在秘密数字中，但位置与秘密数字不一致。
 * 
 * 
 * 请注意秘密数字和朋友的猜测数都可能含有重复数字，每位数字只能统计一次。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: secret = "1807", guess = "7810"
 * 输出: "1A3B"
 * 解释: 1 公牛和 3 奶牛。公牛是 8，奶牛是 0, 1 和 7。
 * 
 * 示例 2:
 * 
 * 输入: secret = "1123", guess = "0111"
 * 输出: "1A1B"
 * 解释: 朋友猜测数中的第一个 1 是公牛，第二个或第三个 1 可被视为奶牛。
 * 
 * 
 * 
 * 说明: 你可以假设秘密数字和朋友的猜测数都只包含数字，并且它们的长度永远相等。
 * 
 */

// @lc code=start
function getHint(secret: string, guess: string): string {
  let aNum = 0
  let bNum = 0
  let hash = new Array(10).fill(0)

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      aNum ++
    } else {
      if (hash[secret[i]] < 0) bNum ++
      hash[secret[i]] ++ 
      if (hash[guess[i]] > 0) bNum ++
      hash[guess[i]] --
    }
  }

  return `${aNum}A${bNum}B`;
};

// 50%



/*
1. 暴力求解
// 复杂度其实是 O(n^2) 空间O(n)
function getHint(secret: string, guess: string): string {
  let s1 = secret.split('')
  let s2 = guess.split('')
  let aNum = 0
  let bNum = 0

  for (let i = 0; i < s1.length; i++) {
    if (!s1[i] || !s2[i]) break
    if (s1[i] === s2[i]) {
      s1[i] = s2[i] = 'A'
      aNum ++
    }
  }
  for (let j = 0; j < s1.length; j++) {
    const s2Index = s2.indexOf(s1[j]);
    if(s1[j] !== 'A' && s2Index > -1){
        s2[s2Index] = 'B';
        bNum++
    }
  }
  return `${aNum}A${bNum}B`;
};
2. 通过数组存储一个10数位的数组
* 一次遍历，先每次遍历先判断是否上下都相等，
  * 如果相等，则A++
  * 如果不相等，通过 hash[secret[i]] +1 存储次数， hash[guess[i]] -1 存储出现次数
    * 这样如果 hash[secret[i]] < 0 的时候，说明前面 guess 出现过，属于位置错了，然后 +1 抵消这次
    * 如果 hash[guess[i]] > 0 的时候，说明前面 secret 出现过，属于位置错了，然后 +1 抵消这次
    * 这样也不会有重复的情况发生
*/

// @lc code=end

