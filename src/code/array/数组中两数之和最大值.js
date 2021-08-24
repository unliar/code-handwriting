const maxSumArr = (arr) => {
  let maxSum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 初始化 maxSum
      if (maxSum === undefined) {
        maxSum = arr[i] + arr[j];
      } else {
        // 和的最大值
        maxSum = Math.max(maxSum, arr[i] + arr[j]);
      }
    }
  }
  return maxSum;
};

console.log(maxSumArr([-2, 1, 222, -3, 2]));
