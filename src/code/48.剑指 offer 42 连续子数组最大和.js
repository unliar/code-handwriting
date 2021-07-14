/**
 * @link https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * @param {number[]} arr
 * @description 连续子数组最大和
 */
const maxSubArray = (arr) => {
  let max = arr[0];
  const dp = [];
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    dp[index] = Math.max(dp[index - 1] + element, element);
    max = Math.max(max, dp[index]);
  }
  return max;
};
