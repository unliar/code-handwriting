/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const set = new Set();
  const len = s.length;
  if (len == 1) return [s];
  for (let index = 0; index < len; index++) {
    const element = s[index];
    const subStr = s.substring(0, index) + s.substring(index + 1);
    const subArr = permutation(subStr);
    subArr.forEach((i) => {
      set.add(element + i);
    });
  }

  return [...set];
};

console.log(permutation("123"));
