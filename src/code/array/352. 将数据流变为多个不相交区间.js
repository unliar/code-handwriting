var SummaryRanges = function() {
  this.list = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  this.list[val] = val;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const arr = this.list.filter((item) => !isNaN(item));
  const res = [];
  for (let item of arr) {
    if (res.length == 0) {
      res.push([item, item]);
      continue;
    }
    const end = res.pop();
    // 这里的不相交的区间指的是相邻区间没有差值小于1的区间
    // 如果+1 = 值 说明可以合并
    if (end[1] + 1 == item) {
      end[1] = item;
      res.push(end);
    } else {
      res.push(end, [item, item]);
    }
  }
  return res;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
