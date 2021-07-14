/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  // set 去重比 object key 去重性能更好
  const set = new Set();
  const len = s.length;
  // 递归退出条件
  if (len == 1) return [s];
  // 遍历字符串
  for (let index = 0; index < len; index++) {
    // 当前字符串 作为 首位字符
    const cur = s[index];
    // 去除 当前字符串 获取 剩余字符串
    const subStr = s.slice(0, index) + s.slice(index + 1, len);
    // 递归
    const subArr = permutation(subStr);
    subArr.forEach((item) => {
      set.add(`${cur}${item}`);
    });
  }
  return [...set];
};
