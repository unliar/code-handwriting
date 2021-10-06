/**
 * @param {number[]} nums
 * @return {number}
 * @link https://leetcode-cn.com/problems/third-maximum-number/
 * @description 找到第三大的数
 */
var thirdMax = function(nums) {
  var a = (b = c = -Infinity);
  for (let num of nums) {
    // num 为最大值
    if (num > a) {
      [a, b, c] = [num, a, b];
      // num 为第二大值
    } else if (num < a && num > b) {
      [a, b, c] = [a, num, b];
      // num 为第三大值
    } else if (num < b && num > c) {
      [a, b, c] = [a, b, num];
    }
  }
  return c === -Infinity ? a : c;
};

console.log(thirdMax([3, 2, 2, 22, 1]));
