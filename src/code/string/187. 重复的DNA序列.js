/**
 * @param {string} s
 * @return {string[]}
 * @link https://leetcode-cn.com/problems/repeated-dna-sequences/
 * @description 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

 */
var findRepeatedDnaSequences = function(s) {
  const res = [];
  const set = new Set();
  for (let index = 0; index < s.length - 9; index++) {
    let str = s.substring(index, index + 10);
    // 当set中的元素超过1次并且不在res中
    if (set.has(str) && !res.includes(str)) {
      res.push(str);
    } else {
      set.add(str);
    }
  }
  return res;
};
