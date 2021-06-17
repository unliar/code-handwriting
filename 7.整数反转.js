const reverseNumber = (num) => {
  let res = 0;
  while (num) {
    // 取余
    res = res * 10 + (num % 10);
    // 除以10取整
    num = ~~(num / 10);
  }
  return res;
};
