/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/consecutive-characters/
 * @description 给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
 * @author 远浅
 * @date 2021-12-01
 */
var maxPower = function (s) {
  let max = 0;
  let str = "";
  let count = 1;
  for (let index = 0; index < s.length; index++) {
    const st = s[index];
    // 说明连续字符
    if (st == str) {
      count++;
    } else {
      // 不连续字符重置
      str = st;
      count = 1;
    }
    max = Math.max(count, max);
  }
  return max;
};
