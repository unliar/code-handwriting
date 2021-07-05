/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  for (let i of s) {
    if (s.indexOf(i) == s.lastIndexOf(i)) return i;
  }
};

console.log(firstUniqChar("dddccdbba"));
