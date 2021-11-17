/**
 * @param {string[]} words
 * @return {number}
 * @description
 * 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-of-word-lengths
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var maxProduct = function(words) {
  let max = 0;
  const len = words.length;
  for (let i = 0; i < len; i++) {
    const strs = words[i].split("");
    for (let j = i + 1; j < len; j++) {
      // 如果两个单词没有公共字母，则可以相乘
      if (strs.some((t) => words[j].includes(t)) === false) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  return max;
};
