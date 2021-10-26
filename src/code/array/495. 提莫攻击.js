/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * @description 提莫攻击
 * @link https://leetcode-cn.com/problems/teemo-attacking/
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let res = duration;
  for (let index = 1; index < timeSeries.length; index++) {
    const pre = timeSeries[index - 1];
    const current = timeSeries[index];
    const x = current - pre;
    // 如果间隔小于duration，则按照间隔计算
    if (x <= duration) {
      res += x;
    } else {
      // 否则按照duration计算
      res += duration;
    }
  }
  return res;
};
