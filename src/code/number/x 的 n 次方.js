/**
 * 50. Pow(x, n)
 *
 * @description 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
 * @param {number} x
 * @param {number} n
 * @return {number}
 * @link https://leetcode-cn.com/problems/powx-n/
 */
var myPow = function(x, n) {
  if (n == 0) return 1;
  // 负数
  if (n < 0) return 1 / myPow(x, -n);
  // 奇数递归
  if (n % 2) return x * myPow(x, n - 1);
  // 偶数
  return myPow(x * x, n / 2);
};
