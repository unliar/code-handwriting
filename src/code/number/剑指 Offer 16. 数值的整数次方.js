/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n == 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  // 不能被2 整除的 就是奇数
  if (n % 2) return x * myPow(x, n - 1);
  // 偶数
  return myPow(x * x, n / 2);
};
