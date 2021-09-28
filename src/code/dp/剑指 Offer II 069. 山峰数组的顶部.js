/**
 * @param {number[]} arr
 * @return {number}
 * @description 找出山峰数组的顶部
 * @link https://leetcode-cn.com/problems/B1IidL/
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const mid = ~~((right + left) / 2);
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
