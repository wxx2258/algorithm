/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Medium (47.97%)
 * Likes:    1356
 * Dislikes: 0
 * Total Accepted:    265.2K
 * Total Submissions: 548.9K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2：
 * 
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 400
 * 
 * 
 */

// @lc code=start
function rob(nums: number[]): number {
  let n = nums.length
  if (n <= 1) return n === 0 ? 0 : nums[0]
  const dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  } 
  return dp[n - 1]
};


// 50

/*
1. 暴力遍历
2. 递归
function rob(nums: number[]): number {
  if (nums.length <= 1) return nums.length === 0 ? 0 : nums[0]
  return sub(nums.length - 1)
  function sub(index: number) {
    if (index === 0) return nums[0]
    if (index === 1) return Math.max(nums[0], nums[1])
    const sub1 = sub(index - 2) + nums[index]
    const sub2 = sub(index - 1)
    return Math.max(sub1, sub2)
  }
};
3. DP
a. 找到重复子问题
b. 状态空间
dp[i][0, 1] : 0 - i 能偷盗的maxValue
// 0 不偷， 1 偷
c. DP方程
dp[i][0] = max(dp[i - 1][0], a[i - 1][1])
dp[i][1] = dp[i - 1][0] + nums[i]

function rob(nums: number[]): number {
  if (nums.length === 0) return 0
  const n = nums.length
  const dp = new Array(n)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = []
  }
  
  dp[0][0] = 0
  dp[0][1] = nums[0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1])
};

3.1 DP，优化存储空间
a. 找到重复子问题
b. 状态空间
dp[i]: 0 - i 能偷盗的maxValue， 第i个房子可偷可不偷
// 0 不偷， 1 偷
c. DP方程

dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]) 
===> 其实就是上面那种的 Math.max(dp[i][0], dp[i][1])

function rob(nums: number[]): number {
  let n = nums.length
  if (n <= 1) return n === 0 ? 0 : nums[0]
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(dp[0], nums[1])  // Math.max(dp[i - 1], nums[i] + dp[i - 2])
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
  } 
  return dp[n - 1]
};
*/
// @lc code=end

