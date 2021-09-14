/**
 * @param {number[]} nums
 * @return {number}
 * @description
 * 峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-peak-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findPeakElement = function(nums) {
  // 长度为1
  if (nums.length == 1) return 0;
  // 找山峰
  for (let index = 1; index < nums.length - 1; index++) {
    if (nums[index] > nums[index - 1] && nums[index] > nums[index + 1]) {
      return index;
    }
  }
  // 左边为大值
  if (nums[0] > nums[1]) {
    return 0;
  }
  // 右边为最大值
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    return nums.length - 1;
  }
};
