const MySqrt = (x) => {
  if (x < 2) return x;
  let left = 1;
  let right = ~~(x / 2);
  // 二分法
  while (left < right) {
    const mid = ~~((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return right * right > x ? left : right;
};
