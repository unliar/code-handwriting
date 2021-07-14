/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  const res = [];
  const arr1 = [...arr];
  const findLeastIndex = (arrs) => {
    let Tindex;
    arrs.forEach((item, index) => {
      if (typeof Tindex != "undefined") {
        // 找出最小值
        if (arrs[Tindex] > item) {
          Tindex = index;
        }
      } else {
        Tindex = index;
      }
    });
    return Tindex;
  };
  while (res.length < k) {
    const index = findLeastIndex(arr1);
    res.push(arr1[index]);
    arr1.splice(index, 1);
  }
  return res;
};
