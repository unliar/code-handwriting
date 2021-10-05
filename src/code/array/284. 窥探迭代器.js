/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 * @link https://leetcode.com/problems/peeking-iterator/
 * @description 窥探迭代器
 * 请你设计一个迭代器，除了支持 hasNext 和 next 操作外，还支持 peek 操作。
 */
var PeekingIterator = function(iterator) {
  this.ele = null;
  this.iterator = iterator;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  if (this.ele != null) return this.ele;
  // 取出顶部
  if (this.iterator.hasNext()) {
    this.ele = this.iterator.next();
  }
  return this.ele;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  if (this.ele != null) {
    // 置空顶部
    const v = this.ele;
    this.ele = null;
    return v;
  }

  const v = this.iterator.next();
  return v;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.ele != null || this.iterator.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
