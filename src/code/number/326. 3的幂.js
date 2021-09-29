/**
 * @param {number} n
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/power-of-three/
 * @description 判断一个整数是否是 3 的幂。
 */
var isPowerOfThree = function(n) {
  if (n <= 0) return false;
  while (n % 3 == 0) {
    n /= 3;
  }
  return n == 1;
};
