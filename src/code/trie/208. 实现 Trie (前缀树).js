var Trie = function() {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (const s of word) {
    !node[s] ? (node[s] = {}) : null;
    node = node[s];
  }
  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this._travel(word);
  return !!node && !!node.isWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this._travel(prefix);
};

Trie.prototype._travel = function(w) {
  let node = this.root;
  for (const s of w) {
    node = node[s];
    if (!node) return null;
  }
  return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
