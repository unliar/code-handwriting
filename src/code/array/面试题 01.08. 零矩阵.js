/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @link https://leetcode.cn/problems/zero-matrix-lcci/
 * @desc 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 */
var setZeroes = function(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  // 收集0
  let pos = [];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const v = matrix[r][c];
      if (v === 0) {
        pos.push([r, c]);
      }
    }
  }
  // 清除
  pos.forEach((item) => {
    const [r, c] = item;
    matrix[r] = Array(col).fill(0);
    for (let x = 0; x < row; x++) {
      matrix[x][c] = 0;
    }
  });
  return matrix;
};
