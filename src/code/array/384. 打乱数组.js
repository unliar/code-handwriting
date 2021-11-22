/**
 * @param {number[]} nums
 * @description 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。
 * @link https://leetcode-cn.com/problems/shuffle-an-array/
 * @author 远浅
 */
var Solution = function(nums) {
  this.inited = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.inited;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const num = [...this.inited];
  for (let i = 0; i < num.length; i++) {
    const rindex = ~~(Math.random() * (num.length - i) + i);
    [num[i], num[rindex]] = [num[rindex], num[i]];
  }
  return num;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
