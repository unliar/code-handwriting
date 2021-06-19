const popSort = (arr) => {
  // 一层遍历
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr.length - 1 - index; index2++) {
      // 如果前面的值大于后面的值 交换到后面
      if (arr[index2] > arr[index2 + 1]) {
        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
      }
    }
  }
  return arr;
};

console.log(popSort([1, 3, 4, 5, 6, 7, 2, 2]));
