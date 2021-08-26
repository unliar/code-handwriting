// 并集
const arrMix = function(a, b) {
  return [...new Set([...a, ...b])];
};
// 交集
const arrMix2 = function(a, b) {
  return a.filter((i) => b.include(i));
};
