const Flat = (arr, n = Infinity) => {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) && n > 1 ? Flat(next, n - 1) : next);
  }, []);
};

console.log(Flat([1, 3, 4, , 5, 6, [2, 3, 4, 5, [22, 4, 5]]]));
