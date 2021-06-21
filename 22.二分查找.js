/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let t = -1;
  while (start <= end) {
    const mid = ~~(start + (end - start) / 2);
    const v = nums[mid];
    if (v > target) {
      end = mid - 1;
    } else if (v < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return t;
};
