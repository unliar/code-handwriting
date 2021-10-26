/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @link https://leetcode-cn.com/problems/valid-anagram/
 */
var isAnagram = function(s, t) {
  return (
    s
      .split("")
      .sort()
      .join("") ==
    t
      .split("")
      .sort()
      .join("")
  );
};
