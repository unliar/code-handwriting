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

// 最优解 二分
const findPeakElement = (nums) => {
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      // 下降
      right = mid;
    } else {
      // 上升
      left = mid + 1;
    }
  }
  return left;
};

// 作者：lzxjack
// 链接：https://leetcode-cn.com/problems/find-peak-element/solution/er-fen-sou-suo-javascriptban-by-lzxjack-8ibf/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
