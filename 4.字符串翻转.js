const reverse = (s) => {
  let start = 0;
  let end = s.length - 1;
  // 快慢指针
  while (start < end) {
    const tem = s[start];
    s[start] = s[end];
    s[end] = tem;
    start++;
    end--;
  }
  return s;
};
