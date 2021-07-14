/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  const len = nums.length;
  for (let index = 0; index < len; index++) {
    const v = nums[index];
    // 使用原生的 API 从尾部获取当这个值的索引
    const lastIndex = nums.lastIndexOf(v);
    // 当前索引不等于上述索引 就说明有重复数值
    if (lastIndex != index) {
      return v;
    }
  }
};
