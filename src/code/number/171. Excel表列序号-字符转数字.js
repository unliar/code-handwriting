/**
 *
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let maxIndex = columnTitle.length - 1;
  let num = 0;
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  while (maxIndex >= 0) {
    // 获取字符的位置
    const s = columnTitle[columnTitle.length - 1 - maxIndex];
    num = num * 26 + str.indexOf(s) + 1;
    maxIndex--;
  }

  return num;
};

console.log(titleToNumber("ZY"));
