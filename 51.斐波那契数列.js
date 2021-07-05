/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let pre = 0;
  let cur = 1;

  while (n--) {
    [pre, cur] = [cur, (pre + cur) % 1000000007];
  }

  return pre;
};

console.log(fib(100));
