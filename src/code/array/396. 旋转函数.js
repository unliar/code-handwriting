/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/rotate-function/
 * @desc 旋转函数 2022-04-22
 *
 */
var maxRotateFunction = function(nums) {
  // 暴力法超时
  //   const len = nums.length;
  //   let index = 0;
  //   let max = -Infinity;
  //   while (index++ < len) {
  //     const v = nums.reduce((pre, cur, i) => {
  //       pre += i * cur;
  //       return pre;
  //     }, 0);
  //     nums.unshift(nums.pop());
  //     max = Math.max(v, max);
  //   }
  //   return max;
  const len = nums.length;
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  const dp = [];
  dp[0] = nums.reduce((pre, cur, i) => {
    return pre + i * cur;
  }, 0);
  for (let i = 1; i < len; i++) {
    dp[i] = dp[i - 1] + sum - len * nums[len - i];
  }

  return Math.max(...dp);
};
