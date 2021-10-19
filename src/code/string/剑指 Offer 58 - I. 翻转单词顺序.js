/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(" ")
    .filter((i) => i !== "")
    .map((i) => i.trim())
    .reverse()
    .join(" ");
};
