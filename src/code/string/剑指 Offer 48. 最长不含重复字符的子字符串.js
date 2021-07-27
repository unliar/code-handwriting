/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let str = "";
  for (let index = 0; index < s.length; index++) {
    const curentstr = s[index];
    // 删除之前重复的那个字符串
    const sindex = str.indexOf(curentstr);
    if (sindex > -1) {
      str = str.substring(sindex + 1);
    }

    str += curentstr;
    max = Math.max(max, str.length);
  }
  return max;
};
