/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  const max = 10 ** n;
  const res = [];
  for (let index = 1; index < max; index++) {
    res.push(index);
  }
  return res;
};
