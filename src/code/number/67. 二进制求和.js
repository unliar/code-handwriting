/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * @link https://leetcode-cn.com/problems/add-binary/
 *
 * @desc 给你两个二进制字符串，返回它们的和（用二进制表示）。
 */
var addBinary = function (a, b) {
  const al = a.length;
  const bl = b.length;
  const max = Math.max(al, bl);
  // 将两个字符串补齐
  a = a.padStart(max, "0");
  b = b.padStart(max, "0");
  let flag = 0;
  let res = "";
  for (let i = max - 1; i >= 0; i--) {
    const xa = a[i];
    const xb = b[i];
    const v = Number(xa) + Number(xb) + Number(flag);
    if (v <= 1) {
      res = `${v}${res}`;
      flag = 0;
    }
    if (v === 2) {
      res = `0${res}`;
      flag = 1;
    }
    if (v === 3) {
      res = `1${res}`;
      flag = 1;
    }
  }
  return flag == 1 ? `1${res}` : res;
};
