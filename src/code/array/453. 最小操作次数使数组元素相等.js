/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。
 * @link https://leetcode-cn.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/
 *
 */
var minMoves = function(nums) {
  // 思路 每次 n-1个元素+1
  // 众所周知 所有人都+1 相当于所有人都-1；
  // 求和最小值的差值和就可以得到最小操作次数
  let count = 0;
  let min = Math.min(...nums);
  for (const num of nums) {
    count += num - min;
  }
  return count;
};
