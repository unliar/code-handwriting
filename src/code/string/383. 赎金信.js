/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/ransom-note/
 * @author 远浅
 */
var canConstruct = function (ransomNote, magazine) {
  const rmap = ransomNote.split("").reduce((pre, cur) => {
    if (pre[cur]) {
      pre[cur]++;
    } else {
      pre[cur] = 1;
    }
    return pre;
  }, {});

  const mmap = magazine.split("").reduce((pre, cur) => {
    if (pre[cur]) {
      pre[cur]++;
    } else {
      pre[cur] = 1;
    }
    return pre;
  }, {});

  for (let key in rmap) {
    // 杂志字符串无需要的字母
    if (!mmap[key]) return false;
    // 杂志字符串数量不够
    if (rmap[key] > mmap[key]) return false;
  }
  return true;
};
