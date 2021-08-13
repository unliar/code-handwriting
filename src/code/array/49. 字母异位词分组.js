/**
 * @param {string[]} strs
 * @return {string[][]}
 * @description
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var groupAnagrams = function(strs) {
  let obj = {};
  strs.forEach((i) => {
    // 思路字符串排序后当做key
    const key = i.split("").sort();

    if (obj[key]) {
      obj[key].push(i);
    } else {
      obj[key] = [i];
    }
  });
  return [...Object.values(obj)];
};
