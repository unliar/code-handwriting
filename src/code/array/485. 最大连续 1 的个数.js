/**
 * @param {number[]} nums
 * @return {number}
 * @description 最大连续1的个数
 * @link https://leetcode-cn.com/problems/maximum-number-of-consecutive-ones/
 */
var findMaxConsecutiveOnes = function(nums) {
  return Math.max(
    ...nums
      .join("")
      .split("0") // 0分割
      .map((i) => i.length)
  );
};

var findMaxConsecutiveOnes2 = function(nums) {
  let arr = [0];
  let index = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] == 1) {
      arr[index] = arr[index] + 1;
    } else {
      index += 1;
      arr[index] = 0;
    }
  }
  return Math.max(...arr);
};
