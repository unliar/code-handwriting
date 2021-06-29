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

/**
 *
 * @param {any[]} arr
 */
const quickSort = (arr) => {
  // 边界条件
  if (arr.length <= 1) return arr;
  const base = arr.pop();
  const left = [];
  const right = [];
  arr.forEach((item) => {
    if (item > base) {
      right.push(item);
    } else {
      left.push(item);
    }
  });
  return [...quickSort(left), base, ...quickSort(right)];
  // return quickSort(left).concat([base], quickSort(right));
};

const arr = [1, 3, 4, 5, 6, 7, 2, 2];

console.log(popSort(arr));
console.log(quickSort(arr));
