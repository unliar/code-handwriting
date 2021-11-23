/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * @author 远浅
 * @description
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 * @link https://leetcode-cn.com/problems/friend-circles/
 */
var buddyStrings = function(s, goal) {
  const sl = s.length;
  const gl = goal.length;
  // 长度
  if (sl != gl) return false;
  // 相等的话必须要有重复元素才能交换
  if (s == goal) return new Set(s.split("")).size != goal.length;
  // 不相等
  let count = 0;
  let l = -1;
  let g = -1;
  for (let index = 0; index < sl; index++) {
    if (s[index] != goal[index]) {
      count++;
      // 超过两个
      if (count > 2) return false;
      if (l == -1) {
        l = index;
      } else {
        g = index;
      }
    }
  }
  if (count != 2) return false;
  // 交换两个位置的值
  let sArr = s.split("");
  [sArr[g], sArr[l]] = [sArr[l], sArr[g]];
  return sArr.join("") == goal;
};
