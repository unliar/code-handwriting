/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  // 整除后的商 符号
  let f = 1;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    f = -1;
  }
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let res = 0;
  // 除数为1 商为被除数
  if (divisor === 1) {
    res = dividend;
  } else {
    res = def(dividend, divisor);
  }
  // 符号回顾
  f === 1 ? null : (res = -res);
  // lc 边界
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return Math.pow(2, 31) - 1;
  }
  return res;

  function def(a, b) {
    let count = 1;
    // a 比 b小 没的除
    if (a < b) return 0;
    let tmpb = b;
    // 倍数相减
    while (tmpb + tmpb <= a) {
      count += count;
      tmpb += tmpb;
    }
    return count + def(a - tmpb, b);
  }
};

console.log(divide(10, 3));
