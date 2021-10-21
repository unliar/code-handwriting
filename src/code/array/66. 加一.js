/**
 * @param {number[]} digits
 * @return {number[]}
 * @description 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 2021-10-21 finished
 * @link https://leetcode-cn.com/problems/plus-one/
 */
var plusOne = function(digits) {
  let f = 0;
  const maxIndex = digits.length - 1;
  for (let i = maxIndex; i >= 0; i--) {
    // 末尾+1
    if (i == maxIndex) {
      digits[i] = digits[i] + 1;
    } else {
      digits[i] = digits[i] + f;
    }
    if (digits[i] >= 10) {
      f = 1;
      digits[i] = digits[i] - 10;
    } else {
      f = 0;
    }
  }
  if (f) digits.unshift(1);
  return digits;
};
