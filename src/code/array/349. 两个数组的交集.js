/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @desc 给定两个数组，写一个方法来计算它们的交集。
 * 
示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
 */
var intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter((i) => nums2.includes(i)))];
};
