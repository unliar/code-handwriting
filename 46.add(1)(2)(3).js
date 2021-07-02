const Add = (...args) => {
  const sum = args.reduce((pre, cur) => pre + cur, 0);
  return (...nexts) => {
    return nexts.length ? Add(sum, ...nexts) : sum;
  };
};

function Add2() {
  let args = [...arguments];
  let addfun = function () {
    args.push(...arguments);
    return addfun;
  };
  addfun.toString = function () {
    return args.reduce((a, b) => {
      return a + b;
    });
  };
  return addfun;
}

console.log(Add2(1)(2)(3));
