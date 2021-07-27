/**
 * @description
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length <= 1) return nums[0] || 0;
  // 首位相邻 所以直接删除掉首或者尾节点 复杂度 2n
  const arr1 = [...nums];
  arr1.shift();
  const arr2 = [...nums];
  arr2.pop();
  return Math.max(rob1(arr1), rob1(arr2));
};

var rob1 = function(nums) {
  const len = nums.length;
  const dp = [nums[0], Math.max(nums[0], nums[1] || 0)];
  for (let index = 2; index < len; index++) {
    // 抢第index家劫舍
    // 此时要么是第index家劫舍，要么是第index-1家劫舍
    dp[index] = Math.max(dp[index - 2] + nums[index], dp[index - 1]);
  }
  return dp.pop();
};
