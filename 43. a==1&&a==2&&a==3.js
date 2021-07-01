// 修改getter
let v = 0;
Object.defineProperty(globalThis, "a", {
  get() {
    return ++v;
  },
});

console.log(a == 1 && a == 2 && a == 3);

// 花式覆盖 隐式调用join方法
const b = [1, 2, 3];

b.join = b.shift;

console.log(b == 1 && b == 2 && b == 3);

// toString or valueOf
var c = {
  i: 1,
  toString: function () {
    return c.i++;
  },
};

console.log(c == 1 && c == 2 && c == 3);
