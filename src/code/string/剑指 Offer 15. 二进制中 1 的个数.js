/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  const res = n.toString(2).match(/1/g);
  return res ? res.length : 0;
};
