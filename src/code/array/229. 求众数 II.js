/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 找出数组中出现次数超过 ⌊ n/3 ⌋ 的元素
 * @link https://leetcode-cn.com/problems/majority-element-ii/
 */
var majorityElement = function(nums) {
  let t = ~~(nums.length / 3);
  let res = [];
  let m = {};
  for (let num of nums) {
    if (m[num]) {
      const t = m[num] + 1;
      m[num] = t;
    } else {
      m[num] = 1;
    }
    // 如果超过 n/3  并且不再res中
    if (m[num] > t && !res.includes(num)) {
      res.push(num);
    }
    // 超过 n/3 次数的元素最多只有两个
    if (res.length == 2) break;
  }
  return res;
};
