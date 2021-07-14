/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof
 */
var maxSubArray = function (nums) {
  const dp = [];
  dp[0] = nums[0];
  let max = dp[0];
  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    // 这样dp i 一直都是最大值
    dp[index] = Math.max(element + dp[index - 1], element);
    // 对比max
    max = Math.max(dp[index], max);
  }
  return max;
};
