/**
 * @description 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
 * @link https://leetcode-cn.com/problems/add-and-search-word-data-structure-design/
 * 前缀树
 */
var WordDictionary = function() {
  this.list = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  this.list.push(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return word.includes(".")
    ? this.list.some((t) => t.length == word.length && new RegExp(word).test(t))
    : this.list.includes(word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
