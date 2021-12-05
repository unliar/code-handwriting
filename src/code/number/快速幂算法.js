/**
 * 快速幂算法
 */

const quickPow = (x, y) => {
  if (n == 0) return 1;
  if (n % y == 1) return quickPow(x, y - 1) * a;
  const temp = quickPow(a, y / 2);
  return temp * temp;
};
