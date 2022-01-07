/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/
 */
var maxDepth = function(s) {
  let tem = 0,
    res = 0;
  // 求最大左连续括号的个数
  for (const str of s) {
    if (str == "(") {
      tem++;
    } else if (str == ")") {
      tem--;
    }
    res = Math.max(tem, res);
  }
  return res;
};
