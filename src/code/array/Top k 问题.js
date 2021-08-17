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

let findKthLargest = function(nums, k) {
  // 进行k轮冒泡排序
  bubbleSort(nums, k);
  return nums[nums.length - k];
};

let bubbleSort = function(arr, k) {
  for (let i = 0; i < k; i++) {
    // 提前退出冒泡循环的标识位
    let flag = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        flag = false;
        // 表示发生了数据交换
      }
    }
    // 没有数据交换
    if (flag) break;
  }
};

console.log(FindKthLargest([1, 2, 3, 4, 4, 4, 5], 2));
