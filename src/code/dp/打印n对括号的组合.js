/**
 * @description 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
    说明：解集不能包含重复的子集。
 * @link https://leetcode-cn.com/problems/bracket-lcci/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  const dfs = (left, right, str) => {
    if (left == 0 && right == 0) {
      res.push(str);
    }
    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }
    if (right > left) {
      dfs(left, right - 1, str + ")");
    }
  };
  dfs(n, n, "");
  return res;
};
