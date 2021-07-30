const GetTopThree = (str) => {
  let obj = {};
  let res = [];
  for (let s of str) {
    if (obj[s]) {
      obj[s]++;
    } else {
      obj[s] = 1;
    }
  }
  // 考虑并列的问题
  let maxValues = [...new Set(Object.values(obj))]
    .sort((a, b) => b - a)
    .slice(0, 3);
  Object.keys(obj).forEach((key) => {
    if (maxValues.includes(obj[key])) {
      res.push(key);
    }
  });
  return res;
};

console.log(GetTopThree("aabbccddff"));
