/**
 * 1877. 数组中最大数对和的最小值
 * @description
 * 输入：nums = [3,5,2,3]
输出：7
解释：数组中的元素可以分为数对 (3,3) 和 (5,2) 。
最大数对和为 max(3+3, 5+2) = max(6, 7) = 7 。
 * @link https://leetcode-cn.com/problems/minimize-maximum-pair-sum-in-array/
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  // 偷懒必不过 test case
  nums.sort((a, b) => a - b);
  let max = nums[0] + nums[1];
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    max = Math.max(max, nums[start] + nums[end]);
    start++;
    end--;
  }
  return max;
};
