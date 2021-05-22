/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (60.74%)
 * Likes:    1616
 * Dislikes: 0
 * Total Accepted:    135.2K
 * Total Submissions: 222.6K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * word1 和 word2 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
function minDistance(word1: string, word2: string): number {
  let n1 = word1.length;
  let n2 = word2.length;
  let dp = new Array(n1 + 1)
  for (let i = 0; i < n1 + 1; i++) {
      dp[i] = new Array(n2 + 1).fill(0)
  }
  for (let j = 1; j <= n2; j++) {
      dp[0][j] = dp[0][j - 1] + 1;
  }
  for (let i = 1; i <= n1; i++) {
      dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let i = 1; i <= n1; i++) {
      for (let j = 1; j <= n2; j++) {
          // 如果 word1[i] 与 word2[j] 相等。第 i 个字符对应下标是 i-1
          if (word1[i - 1] == word2[j - 1]){
              dp[i][j] = dp[i - 1][j - 1];
          }else {
              dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
          }         
      }
  }
  return dp[n1][n2];
};

// 50

/*
1. 暴力BFS
2. 动态规划
https://leetcode-cn.com/problems/edit-distance/solution/dong-tai-gui-hua-xiang-jie-xiang-jin-zhu-a8e5/
a. 子问题
从A到B有三个操作
增 ： 从A到B前j个字符的操作等于 从A到B前 j-1 个字符 + 1
删 ： 从A删等价于从B加一个，所以 从A到B前j个字符的操作等于 从A到B前 j+1 个字符 + 1
改：  从A 到 B 等价与 从 A i-1 到 B j-1 + 1


b. 状态空间
dp[i][j] 代表 word1 中前 i 个字符，变换到 word2 中前 j 个字符，最短需要操作的次数

dp[0][j] dp[i][0]  

c. DP方程
增，dp[i][j] = dp[i][j - 1] + 1
删，dp[i][j] = dp[i - 1][j] + 1
改，dp[i][j] = dp[i - 1][j - 1] + 1
min(....)
*/
// @lc code=end

