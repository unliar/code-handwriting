/**
 * @param {number[]} nums
 * @return {number[]}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) return nums;
  let back = 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[back] !== nums[index]) {
      back++;
      nums[back] = nums[index];
    }
  }
  nums.length = back;
  return nums;
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 1, 1, 1]));
