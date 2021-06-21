/**
 * 获取最大值索引
 * @param {*} nums
 * @returns {number}
 */
const GetMaxIndex = (nums) => {
  let targetIndex;
  nums.forEach((item, index) => {
    if (typeof targetIndex == "number") {
      // 如果当前值大于
      if (item > nums[targetIndex]) {
        targetIndex = index;
      }
    } else {
      targetIndex = index;
    }
  });
  return targetIndex;
};

const FindKthLargest = (nums, k) => {
  const ns = [...nums];
  const set = [];
  while (set.length < k) {
    const maxIndex = GetMaxIndex(ns);
    const max = ns[maxIndex];
    // 因为考虑到去重问题
    if (set[set.length - 1] != max) {
      set.push(max);
    }
    ns.splice(maxIndex, 1); // 删除
  }
  return set[k - 1];
};

console.log(FindKthLargest([1, 2, 3, 4, 4, 4, 5], 2));
