/*
 * 从指定区间中选出n个数
 */

const RangeArr = (min, max, n) => {
  const res = [];
  const len = max - min + 1;
  for (let index = 0; index < len; index++) {
    const v = index + min;
    // 将前n个数push进去
    if (index < n) {
      res.push(v);
    } else {
      // 随机索引
      const randomIndex = ~~(Math.random() * index);
      // 索引小于 n 就替换数值
      if (randomIndex < n) {
        res[randomIndex] = v;
      }
    }
  }
  return res;
};

console.log(RangeArr(9, 18, 3));
