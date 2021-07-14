/**
 * @param {number[]} prices
 * @return {number}
 * @description 获取一比股票交易最佳买入卖出收益
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 */
var maxProfit = function(prices) {
  // 最小值
  let min = prices[0];
  // 收益
  let profit = 0;
  const len = prices.length;
  for (let index = 0; index < len; index++) {
    const price = prices[index];
    // 最小股价
    min = Math.min(price, min);

    // 最大收益
    profit = Math.max(price - min, profit);
  }
  return profit;
};
