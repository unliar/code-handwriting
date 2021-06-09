const reverseNumber = (num) => {
  let res = 0;
  while (num) {
    res = res * 10 + (num % 10);
    num = ~~(num / 10);
  }
  return res;
};
