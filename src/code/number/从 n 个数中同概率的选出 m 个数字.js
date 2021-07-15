/**
 * 蓄水池抽样
 * 同概率的从 n 个数字中选出m个数字
 * @param {number} n
 * @param {number} m
 */
const RandomPick = (n, m) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    // 数据初始化
    if (i < m) {
      res.push(i);
    } else {
      const random = ~~(Math.random() * i);
      if (random < m) {
        res[random] = i;
      }
    }
  }
  return res;
};

console.log(RandomPick(5, 3));
