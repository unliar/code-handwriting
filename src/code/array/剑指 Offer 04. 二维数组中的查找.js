/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length == 0) return false;
  let yes = false;
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row < matrix.length) {
    let cur = matrix[row][col];
    if (cur == target) {
      return true;
    }
    if (cur > target) {
      col--;
    } else {
      row++;
    }
  }
  return yes;
};
