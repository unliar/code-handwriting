/**
 * @param {number} n
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/power-of-two/
 * @description 判断一个整数是否是 2 的幂次方
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & -n) == n;
};
