/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = "";
  // 取第一个作为标志
  const mark = strs.shift();
  const len = mark.length;
  // 剩余元素为空则意味着第一个就是最长
  if (strs.length == 0) return mark;
  // 遍历标志元素
  for (let index = 0; index < len; index++) {
    const isSame = strs.every((item) => item[index] == mark[index]);
    if (isSame) {
      res += mark[index];
    } else {
      return res;
    }
  }
  return res;
};
