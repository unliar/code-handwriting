/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @description 实现 strStr() 函数。
 * @link https://leetcode-cn.com/problems/implement-strstr/
 */
var strStr = function(haystack, needle) {
  if (haystack === needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    // 截取指定长度字符串
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};
