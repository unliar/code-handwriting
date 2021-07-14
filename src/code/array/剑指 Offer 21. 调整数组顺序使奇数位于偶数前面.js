/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  nums.sort((a, b) => (b % 2) - (a % 2));
  return nums;
};
