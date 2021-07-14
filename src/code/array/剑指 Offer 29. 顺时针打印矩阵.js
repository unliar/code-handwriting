/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];
  const row = matrix.length; // 行
  const col = matrix[0].length; // 列
  const size = row * col; // 行x列 = 个数
  const res = [];
  let top = 0;
  let right = col - 1;
  let bottom = row - 1;
  let left = 0;
  while (res.length != size) {
    // 从左 - 右边 遍历一次之后 上策边界收窄
    for (let index = left; index <= right; index++) {
      res.push(matrix[top][index]);
    }
    top++;
    // 从上到下 遍历一次后 右侧边界收窄;
    for (let index = top; index <= bottom; index++) {
      res.push(matrix[index][right]);
    }
    right--;
    if (res.length == size) break;
    // 从 右 - 左 下侧边界收窄
    for (let index = right; index >= left; index--) {
      res.push(matrix[bottom][index]);
    }
    bottom--;
    // 从下往上 左侧边界收窄
    for (let index = bottom; index >= top; index--) {
      res.push(matrix[index][left]);
    }
    left++;
  }
  return res;
};
