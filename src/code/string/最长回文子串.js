/**
 * @description
 * 给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  let res = "";

  const dfs = (left, right) => {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
    }
    // 判断本轮回文字符串长度是否大于之前一轮的回文字符串
    // left 0, right 1;
    // 长度是 2 right - left +1
    // 本轮实际的实际长度是  (right-1)-(left+1)+1
    if (right - left - 1 > res.length) {
      res = s.slice(left + 1, right);
    }
  };

  for (let i = 0; i < s.length; i++) {
    dfs(i, i);
    dfs(i, i + 1);
  }

  return res;
};

console.log(longestPalindrome("babad"), longestPalindrome("cbbd"));
