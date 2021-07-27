/**
 * @description
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) return 0;
  let len = 0;
  let str = "";
  for (let index = 0; index < s.length; index++) {
    const currentStr = s[index];
    const sindex = str.indexOf(currentStr);
    console.log("当前字符", currentStr, "搜索位置", sindex);
    if (sindex > -1) {
      str = str.substring(sindex + 1);
    }
    str += currentStr;
    len = Math.max(len, str.length);
  }
  return len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
