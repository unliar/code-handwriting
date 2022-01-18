/**
 * @param {string[]} timePoints
 * @link https://leetcode-cn.com/problems/minimum-time-difference/
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  // 思路： 将时间点按照时间排序，然后求最小差值
  const arr = timePoints
    .map((item) => {
      const a = item.split(":");
      return Number(a[0]) * 60 + Number(a[1]);
    })
    .sort((v1, v2) => v1 - v2);

  const len = arr.length;
  // 首尾两个的差值是最大的
  let min = 1440 - (arr[len - 1] - arr[0]);
  for (let i = 1; i < len; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  return min;
};
