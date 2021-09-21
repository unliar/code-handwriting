/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/length-of-last-word/
 * @description
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

 */
var lengthOfLastWord = function(s) {
  let len = s.length;
  let res = 0;
  for (let index = len - 1; index >= 0; index--) {
    const str = s[index];
    // 从后往前遍历  当最后一个字符不为空格++
    if (str != " ") {
      res++;
    }
    // 当长度有了 但是又有空格说明要退出循环
    if (res > 0 && str == " ") {
      break;
    }
  }
  return res;
};
