const popSort = (arr) => {
  const len = arr.length;

  // 一层遍历
  for (let index = 0; index < len; index++) {
    let flag = true; // 优化项

    for (let index2 = 0; index2 < len - 1 - index; index2++) {
      // 如果前面的值大于后面的值 交换到后面
      if (arr[index2] > arr[index2 + 1]) {
        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
        flag = false;
      }
    }

    if (flag) {
      break;
    }
  }
  return arr;
};

/**
 * 原理就是通过选取一个中间值 大于中间值 push 进右边数组 小于 左边
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
