/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 * @description
 * 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findLongestWord = function(s, dictionary) {
  // 先进行字典序排列
  dictionary.sort((a, b) =>
    b.length == a.length ? a.localeCompare(b) : b.length - a.length
  );
  // 遍历数组
  for (let index = 0; index < dictionary.length; index++) {
    const item = dictionary[index];
    if (isvalid(s, item)) {
      return item;
    }
  }
  return "";

  // 是否可以通过删减字符串来匹配
  function isvalid(content, st) {
    const len = st.length;
    let index = 0;
    for (let char of content) {
      if (char == st[index]) {
        index++;
      }
      if (index == len) {
        return true;
      }
    }
    return false;
  }
};
