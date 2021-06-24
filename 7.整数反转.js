const reverseNumber = (num) => {
  let res = 0;
  while (num) {
    // 取余
    res = res * 10 + (num % 10);
    // 除以10取整 运算符 防溢出
    num = ~~(num / 10) | 0;
  }
  return (res | 0) === res ? res : 0;
};
