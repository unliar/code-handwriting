/**
 * @description
 * 拆分数组
 * @param {number[]} arr
 */
const FindTheIndex = (arr) => {
  for (let index = 1; index < arr.length - 1; index++) {
    const item = arr[index];
    const leftMax = Math.max(...arr.slice(0, index));
    const rightMin = Math.min(...arr.slice(index + 1));
    if (leftMax < item && item > rightMin) {
      return index;
    }
  }
  return -1;
};

console.log(FindTheIndex([1, 1, 3, 0, 0]));
