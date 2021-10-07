/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode-cn.com/problems/number-of-segments-in-a-string/
 * @description
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-segments-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var countSegments = function(s) {
  return s.split(" ").filter((i) => !!i).length;
};

// 解法2
var countSegments2 = function(s) {
  let str = "";
  let count = 0;
  for (let S of s) {
    // 如果字符串是空格
    if (S == " ") {
      // 检查暂存的字符串是否为空,不为空计数+1，并且置空
      if (str != "") {
        count++;
        str = "";
      }
    } else if (S != "") {
      // 非空格字符串拼接
      str += S;
    }
  }
  // 有可能最后一个单词没空格 所以没计数
  return str.length == 0 ? count : count + 1;
};
// 解法3 正则
var countSegments3 = function(s) {
  return s.match(/[^\s]+/g)?.length ?? 0;
};
