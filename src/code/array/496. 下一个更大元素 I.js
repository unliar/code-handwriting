/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @description 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。

请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-greater-element-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var nextGreaterElement = function(nums1, nums2) {
  return nums1.map((num) => {
    return (
      nums2
        .slice(nums2.findIndex((x) => x == num))
        .find((item) => item > num) || -1
    );
  });
};
