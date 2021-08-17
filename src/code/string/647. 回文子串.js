/**
 * @param {string} s
 * @return {number}
 * @description
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 *
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 *
 * 示例 1：
 * 输入："abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 *
 * @link https://leetcode-cn.com/problems/palindromic-substrings/
 */
var countSubstrings = function(s) {
  let count = 0;
  //const list =[]
  const dfs = (left, right) => {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
      count++;
      //list.push(s.slice(left + 1, right));
    }
  };
  for (let index = 0; index < s.length; index++) {
    dfs(index, index);
    dfs(index, index + 1);
  }
  return count;
  // return list.length
};
