/**
 * 300. 最长递增子序列
 * link https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = [1];
  let max = 1;
  // 遍历数组
  for (let i = 1; i < nums.length; i++) {
    // 初始化
    dp[i] = 1;
    // 遍历之前的数组
    for (let j = 0; j < i; j++) {
      // 当前数值比之前的数值要大
      nums[i] > nums[j] && (dp[i] = Math.max(dp[i], dp[j] + 1));
    }
    max = Math.max(dp[i], max);
  }
  return max;
};
