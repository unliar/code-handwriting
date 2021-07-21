/**
 * 168. Excel表列名称
 * @link https://leetcode-cn.com/problems/excel-sheet-column-title/
 * @param {number} c
 * @return {string}
 */
var convertToTitle = function(c) {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  while (c) {
    c--;
    result = str[c % 26] + result;
    c = ~~(c / 26);
  }
  return result;
};

console.log(convertToTitle(28) == "AB");
