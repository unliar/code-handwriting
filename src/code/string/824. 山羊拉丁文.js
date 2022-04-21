/**
 * @param {string} sentence
 * @return {string}
 * @link https://leetcode-cn.com/problems/goat-latin/
 * @difficulty easy
 * @desc 山羊拉丁文
 */
var toGoatLatin = (sentence) =>
  sentence
    .split(" ")
    .map((str, index) => {
      const f = str[0].toLocaleLowerCase();
      const oarr = ["a", "e", "i", "o", "u"];
      if (oarr.includes(f)) {
        return str + "ma" + "a".repeat(index + 1);
      }
      return str.slice(1) + str[0] + "ma" + "a".repeat(index + 1);
    })
    .join(" ");
