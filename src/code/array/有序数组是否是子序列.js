// b 是否是 a 的子序列
const IsSubset = (a, b) => {
  // b 为空 则true
  const bl = b.length;
  if (bl == 0) return true;
  let a1 = 0;
  let b1 = 0;
  // 遍历 a 数组
  while (a1 < a.length) {
    // 如果相等 b index ++
    if (b[b1] == a[a1]) {
      b1++;
      // 如果子序列都遍历完了
      if (b1 === bl) return true;
    }
    // a index ++
    a1++;
  }
  return false;
};

console.log(IsSubset([], []));
