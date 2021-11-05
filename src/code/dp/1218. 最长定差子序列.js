/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 * @link https://leetcode-cn.com/problems/longest-arithmetic-subsequence-of-given-difference/
 * @description 最长定差子序列
 * 当前数字num能构成的最长定差子序列，由上一个num-difference能构成的最长定差子序列的长度决定。
 */
var longestSubsequence = function(arr, difference) {
  const map = {};
  let res = 1;
  for (const num of arr) {
    let key = num - difference;
    if (map[key] === undefined) {
      map[num] = 1;
    } else {
      map[num] = map[key] + 1;
      res = Math.max(res, map[num]);
    }
  }
  return res;
};
