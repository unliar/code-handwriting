/**
 * 1893. 检查是否区域内所有整数都被覆盖
 * @description
 * 输入：ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
输出：true
解释：2 到 5 的每个整数都被覆盖了：
- 2 被第一个区间覆盖。
- 3 和 4 被第二个区间覆盖。
- 5 被第三个区间覆盖。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-if-all-the-integers-in-a-range-are-covered
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  let flag = true;
  // 遍历 left - right 之间的数字
  for (let v = left; v <= right; v++) {
    // 每一个值都应该落在某个 range
    const c = ranges.some((item) => {
      const [start, end] = item;
      return v >= start && v <= end;
    });
    // 没有命中range 退出
    if (!c) {
      flag = false;
      break;
    }
  }
  return flag;
};
