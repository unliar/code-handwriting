// https://leetcode-cn.com/problems/rotate-matrix-lcci/

var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      // 对称交换
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 每一行倒序
  matrix.forEach((r) => r.reverse());
};
