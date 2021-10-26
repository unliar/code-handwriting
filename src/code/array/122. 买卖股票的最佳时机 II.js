/**
 * @param {number[]} prices
 * @return {number}
 * @description 多次买卖股票的最佳时机 II
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
var maxProfit = function(prices) {
  let total = 0;
  for (let index = 0; index < prices.length - 1; index++) {
    // 买入立刻卖出
    const profit = prices[index + 1] - prices[index];
    // 求最大值
    total = total + Math.max(profit, 0);
  }
  return total;
};
