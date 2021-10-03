/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const m = new Map();
  for (let index = 0; index < nums.length; index++) {
    const v = nums[index];
    if (Math.abs(index - m.get(v)) <= k) return true;
    m.set(v, index);
  }
  return false;
};
