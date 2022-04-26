/**
 * @param {number[][]} grid
 * @return {number}
 * @link https://leetcode-cn.com/problems/projection-area-of-3d-shapes/
 * @author 远浅
 */
var projectionArea = function(grid) {
  const c = [];
  let maxRow = 0;
  const top = grid.reduce((pre, cur) => {
    cur.forEach((item, index) => {
      if (Array.isArray(c[index])) {
        c[index].push(item);
      } else {
        c[index] = [item];
      }
    });
    // 计算侧视图 每一行最大值相加
    maxRow += Math.max(...cur);
    // 计算俯视图面积 不为0的数值个数
    return pre + cur.filter((i) => i > 0).length;
  }, 0);
  // 计算正视图面积 每一列最大值相加
  const maxColumn = c.reduce((pre, cur) => {
    return pre + Math.max(...cur);
  }, 0);
  return maxRow + top + maxColumn;
};
