/**
 *
 *
 * @link https://leetcode-cn.com/problems/excel-sheet-column-number/
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let ans = 0;
  for (const c of columnTitle) {
    ans = ans * 26 + (c.charCodeAt(0) - 64);
  }
  return ans;
};

console.log(titleToNumber("ZY") == 701);
