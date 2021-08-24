/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/find-greatest-common-divisor-of-array/
 * @description
 * 给你一个整数数组 nums ，返回数组中最大数和最小数的 最大公约数 。

两个数的 最大公约数 是能够被两个数整除的最大正整数。

 */
var findGCD = function(nums) {
  function gcd(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  return gcd(max, min);
};
