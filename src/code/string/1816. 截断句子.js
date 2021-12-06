/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * @link https://leetcode-cn.com/problems/truncate-sentence/
 * @desc 截断句子
 * @author 远浅
 */
var truncateSentence = function(s, k) {
  return s
    .split(" ")
    .slice(0, k)
    .join(" ");
};
