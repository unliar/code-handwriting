/**
 * @param {number[]} nums
 * @return {number[]}
 * @link https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/submissions/
 */
var exchange = function(nums) {
  nums.sort((a, b) => (b % 2) - (a % 2));
  return nums;
};
