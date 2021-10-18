/**
 * @param {number} num
 * @return {number}
 * @description 给你一个 正 整数 num ，输出它的补数。补数是对该数的二进制表示取反。
 * @link https://leetcode-cn.com/problems/number-complement/
 */
var findComplement = function(num) {
  let res = "";
  for (let str of num.toString(2)) {
    if (str == "1") {
      res += "0";
    } else {
      res += "1";
    }
  }
  return parseInt(res, 2);
};
