var findMaximizedCapital = function(k, w, profits, capital) {
  const sortProfits = profits
    .map((v, i) => ({ make: v, pay: capital[i] }))
    .sort((a, b) => b.make - a.make); // 按收益由小到大排序
  const maxPay = Math.max(...capital); // 找到所需资本的最大值
  let makeMoney = w;
  while (k) {
    if (makeMoney >= maxPay) {
      // 防止超时的优化
      for (let i = 0; i < k; i++) {
        makeMoney += sortProfits[i]?.make || 0;
      }
      return makeMoney;
    } else {
      const index = sortProfits.findIndex((v) => v.pay <= makeMoney);
      if (index === -1) return makeMoney;
      const cur = sortProfits.splice(index, 1)[0];
      makeMoney += cur.make;
      k--;
    }
  }
  return makeMoney;
};
