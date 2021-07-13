// 使用快慢指针 交换首尾就能实现
const reverse = (s) => {
  let start = 0;
  let end = s.length - 1;
  // 快慢指针
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};

console.log(reverse([1, 2, 3, 4]));
