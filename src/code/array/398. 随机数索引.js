/**
 * @param {number[]} nums
 * @link {https://leetcode-cn.com/problems/random-pick-index/}
 * @description 数组随机选择
 * @author 远浅
 */
var Solution = function(nums) {
  this.arr = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  let r;
  let c = 0;
  for (let i = 0; i < this.arr.length; i++) {
    if (target == this.arr[i]) {
      c++;
      if (Math.random() < 1 / c) {
        r = i;
      }
    }
  }
  return r;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
