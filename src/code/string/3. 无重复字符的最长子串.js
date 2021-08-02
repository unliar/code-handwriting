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
    // 这个地方的意思是
    // 如果之前某个位置出现过，那么就删除之前出现过的字符
    // 比如
    // str = 'abccodkad'
    // 遍历到第二个c的时候
    // 发现c之前出现过
    // 那么删除 abc 保留 codkad
    if (sindex > -1) {
      str = str.substring(sindex + 1);
    }
    str += currentStr;
    len = Math.max(len, str.length);
  }
  return len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
