/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let pre = 0;
  let cur = 1;

  while (n--) [pre, cur] = [cur, (pre + cur) % 1000000007];

  return pre;
};

var fib2 = function(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
