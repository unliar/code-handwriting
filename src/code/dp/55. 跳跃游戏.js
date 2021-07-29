/**
 * 55. 跳跃游戏
 * 
 * @description
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let power = 0; // 初始能力
  let res = true; // 先假设他可以到
  for (let i = 0; i < nums.length - 1; i++) {
    power = Math.max(nums[i], power); // 自身和剩余能力的最大值
    power--; // 每走一步能力会减一
    if (power < 0) {
      // 到某一步能力为0了那么便不能跳了
      res = false;
      break; // get到了就跳出不再循环
    }
  }
  return res;
};
