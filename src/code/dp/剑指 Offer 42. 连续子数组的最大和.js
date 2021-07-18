/**
 * 连续子数组最大和
 * @link https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [];
  let max = (dp[0] = nums[0]);
  for (let index = 1; index < nums.length; index++) {
    // 当前值
    const current = nums[index];
    // 和
    dp[index] = Math.max(current, current + dp[index - 1]);
    // 获取最大和
    max = Math.max(dp[index], max);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6);
