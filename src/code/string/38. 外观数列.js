/**
 * 2020-10-15
 * @param {number} n
 * @return {string}
 * @example
 * 给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-and-say
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var countAndSay = function(n) {
  if (n === 1) return "1";
  // 获取上一个字符串
  const pre = countAndSay(n - 1);
  const preLen = pre.length;
  let res = "";
  // 遍历上一个字符串
  for (let i = 0; i < preLen; i++) {
    let next = i + 1;
    let count = 1;
    // 统计有多少相同的字符串
    while (next < preLen && pre[i] == pre[next]) {
      // 计数++ ，移动指针
      count++;
      next++;
    }
    res += `${count}${pre[i]}`;
    i = i + count - 1;
  }

  return res;
};
