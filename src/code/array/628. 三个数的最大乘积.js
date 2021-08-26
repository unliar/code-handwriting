/**
 * @param {number[]} nums
 * @return {number}
 * @description 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 * 示例 1：

输入：nums = [1,2,3]
输出：6
 * 
 * 
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => b - a);
  const len = nums.length;
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[len - 1] * nums[len - 2]
  );
};

console.log(maximumProduct([-4, -3, 1, 2, 3, 1, 22222]));
