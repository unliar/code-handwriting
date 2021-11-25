/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 * @link https://leetcode-cn.com/problems/poor-pigs/
 * @description 找到最小的需要的猪数
 * @external https://www.zhihu.com/question/60227816/answer/1274071217
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  // 信息熵
  const maxRound = ~~(minutesToTest / minutesToDie) + 1;
  return Math.ceil(Math.log(buckets) / Math.log(maxRound));
};
