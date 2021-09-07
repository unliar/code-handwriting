/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
 */
var balancedStringSplit = function(s) {
  const len = s.length;
  let [left, right] = [0, 0];
  let res = 0;
  for (let index = 0; index < len; index++) {
    if (s[index] == "L") {
      left++;
    } else {
      right++;
    }
    if (left == right && left) {
      res++;
      left = 0;
      right = 0;
    }
  }
  return res;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
