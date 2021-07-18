/**
 * @description
 * 编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
 *
 * @link https://leetcode-cn.com/problems/group-anagrams-lcci/
 * @param {string[]} strs
 * @return {string[][]}
 * @example
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */
var groupAnagrams = function(strs) {
  // 思路 变位元素可以通过数组排序获取到唯一特征值作为分组key
  const m = {};
  for (const item of strs) {
    // 分组key
    const key = item
      .split("")
      .sort()
      .join("");
    // 初始化对象, 如果有数值直接 push
    // 没有就初始化
    if (m[key]) {
      m[key].push(item);
    } else {
      m[key] = [item];
    }
  }
  return Object.values(m);
};
