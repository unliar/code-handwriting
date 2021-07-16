/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 * @description 统计一个数字在排序数组中出现的次数。
 *
 * @author unliar
 * @link https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 思路 找到第一个出现的索引,从此处开始遍历计数,不是目标值就跳出
  const firstIndex = nums.findIndex((item) => item == target);
  let count = 0;
  if (firstIndex == -1) return count;
  for (let index = firstIndex; index < nums.length; index++) {
    if (nums[index] == target) {
      count++;
    } else {
      break;
    }
  }
  return count;
};
