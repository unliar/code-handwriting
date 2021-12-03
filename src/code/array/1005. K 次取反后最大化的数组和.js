/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @author 远浅
 * @link https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/
 */
var largestSumAfterKNegations = function(nums, k) {
  // 绝对值排序
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  const last = nums[nums.length - 1];
  let sum = 0;
  let m = k;
  for (let num of nums) {
    // 负数取反
    if (m > 0 && num < 0) {
      num = -num;
      m--;
    }
    sum += num;
  }
  // 因为可以重复取反
  if (m % 2 == 0) return sum;
  // 如果是最小的数是正数 取反后则是负数 但是之前用正数+过一次了 所以需要减去两次绝对值
  // 如果最小的数是负数 取反后则是正数 但是之前用负数+过一次了 所以需要加上两次绝对值
  return sum - 2 * Math.abs(last);
};
