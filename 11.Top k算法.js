// 思路
// 获取数组中最大的值索引

const GetMaxIndex = (nums) => {
  let targetIndex = 0;
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

const findKthLargest = (nums, k) => {
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

console.log(findKthLargest([1, 2, 3, 4, 4, 4, 5], 2));
