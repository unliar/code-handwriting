/**
 * 168. Excel表列名称
 * @link https://leetcode-cn.com/problems/excel-sheet-column-title/
 * @param {number} c
 * @return {string}
 */
var convertToTitle = function(c) {
  let result = "";
  while (c) {
    c--;
    result = String.fromCharCode((c % 26) + 65) + result;
    c = ~~(c / 26);
  }
  return result;
};

console.log(convertToTitle(28) == "AB");
