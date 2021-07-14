/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = [];
  dp[0] = nums[0];
  let max = dp[0];
  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    dp[index] = Math.max(element + dp[index - 1], element);
    max = Math.max(dp[index], max);
  }
  return max;
};
