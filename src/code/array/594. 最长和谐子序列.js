/**
 * @param {number[]} nums
 * @return {number}
 * @description 最长和谐子序列
 * @link https://leetcode-cn.com/problems/longest-harmonious-subsequence/
 * @author 远浅
 */
var findLHS = function(nums) {
  const obj = {};
  // 先计数
  for (let num of nums) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  let res = 0;
  for (const k in obj) {
    // 当存在和谐子序列时，更新结果
    res = obj[+k + 1] ? Math.max(obj[k] + obj[+k + 1], res) : res;
  }
  return res;
};
