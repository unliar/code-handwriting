/**
 * @param {number} num
 * @return {string}
 * @link https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/
 * @description 数字转换为十六进制数
 */
var toHex = function(num) {
  let res = "";
  const str = "0123456789abcdef";
  if (num < 0) num = num + 2 ** 32;
  if (num === 0) {
    return "0";
  }
  while (num !== 0) {
    res = str[num % 16] + res;
    num = ~~(num / 16);
  }
  return res;
};
