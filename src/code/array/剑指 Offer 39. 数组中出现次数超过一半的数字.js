/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const mid = ~~(nums.length / 2);
  const obj = {};
  for (let index2 = 0; index2 < nums.length; index2++) {
    const key = nums[index2];
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  return +Object.keys(obj).find((key) => obj[key] > mid);
};
