/**
 * @param {number[]} prices
 * @return {number}
 * @description 买卖股票的最佳时机
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  for (let index = 1; index < prices.length; index++) {
    const price = prices[index];
    // 寻找底价
    min = Math.min(min, price);
    // 寻找最大利润
    profit = Math.max(price - min, profit);
  }
  return profit;
};
