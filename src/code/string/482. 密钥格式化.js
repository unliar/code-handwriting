/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  s = s.toUpperCase().replaceAll("-", "");
  let res = "";
  while (s.length) {
    // 字符还有剩余k个以上
    if (s.length > k) {
      res = res ? s.slice(-k) + "-" + res : s.slice(-k);
      s = s.slice(0, -k);
    } else {
      res = res ? s + "-" + res : s;
      s = "";
    }
  }
  return res;
};
