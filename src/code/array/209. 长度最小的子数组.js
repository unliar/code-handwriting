/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let res = Infinity;
  let sum = 0;
  for (let i = 0, j = 0; i < nums.length; i++) {
    sum += nums[i];
    // 大于目标值
    while (sum >= target) {
      res = Math.min(res, i - j + 1);
      // 收缩左区间
      sum -= nums[j++];
    }
  }
  return res == Infinity ? 0 : res;
};
