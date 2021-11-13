/**
 * @param {number[]} coins
 * @return {number}
 * @link https://leetcode-cn.com/problems/na-ying-bi/
 */
var minCount = function(coins) {
  let count = 0;
  for (let coin of coins) {
    // 预设每次拿2枚硬币
    while (coin >= 2) {
      count++;
      coin -= 2;
    }
    // 如果剩余1枚硬币，则拿1枚硬币,计数+1
    if (coin > 0) count++;
  }
  return count;
};
