const add = (a, b) => {
  const maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  let res = "";
  // 进位
  let f = 0;
  for (let index = maxLen - 1; index >= 0; index--) {
    const temSum = f + parseInt(a[index]) + parseInt(b[index]);
    // 获取进位1
    f = ~~(temSum / 10);
    res = (temSum % 10) + res;
  }
  if (f == 1) {
    res = "1" + res;
  }
  return res;
};

console.log(add("92", "222"));

/**
 * 计算2的n次方
 * @param {number} n
 * @returns
 */
const pow = (n) => {
  res = "2";
  while (--n) {
    res = add(res, res);
  }
  return res;
};
console.log(pow(2));
console.log(pow(2) == 4, pow(3) == 8, pow(4) == 16);
console.log(pow(1000));
