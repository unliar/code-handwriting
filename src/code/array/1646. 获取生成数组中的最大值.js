/**
 * @param {number} n
 * @return {number}
 * @leetcode 1646
 * @description
 * 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：

nums[0] = 0
nums[1] = 1
当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
返回生成数组 nums 中的 最大 值。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/get-maximum-in-generated-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var getMaximumGenerated = function(n) {
  let max = 0;
  const arr = [0, 1];
  if (n == 1) return 1;

  for (let index = 2; index <= n; index++) {
    let key = ~~(index / 2);
    // 偶数
    if (index % 2 === 0) {
      arr[index] = arr[key];
    } else {
      // 奇数
      arr[index] = arr[key] + arr[key + 1];
    }
    // 求本轮最大值
    max = Math.max(arr[index], max);
  }
  return max;
};
