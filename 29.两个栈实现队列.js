var CQueue = function () {
  this.A = [];
  this.B = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.A.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.B.length) {
    if (!this.A.length) return -1;
    while (this.A.length) {
      this.B.push(this.A.pop());
    }
  }
  return this.B.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
