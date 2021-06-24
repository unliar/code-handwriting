/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  let len = 0;
  let str = "";
  for (let index = 0; index < s.length; index++) {
    const currentStr = s[index];
    const sindex = str.indexOf(currentStr);
    console.log("当前字符", currentStr, "搜索位置", sindex);
    if (sindex > -1) {
      str = str.slice(sindex + 1);
    }
    str += currentStr;
    len = Math.max(len, str.length);
  }
  return len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
