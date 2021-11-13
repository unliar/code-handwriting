/**
 * @param {number} n
 * @return {number}
 * @link https://leetcode-cn.com/problems/arranging-coins/
 * @desc 排列硬币
 * 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
 */
var arrangeCoins = function(n) {
  let row = 1;
  while (row <= n) {
    n = n - row;
    row++;
  }
  return row - 1;
};
