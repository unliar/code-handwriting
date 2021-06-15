// 考察的是实例的 __proto__ 等于构造函数的 prototype
// 递归实例的 __proto__ 就可以拿到原型
const InstanceOf = (l, r) => {
  const O = r.prototype;
  let L = l.__proto__;
  while (true) {
    if (L == null) return false;
    if (O == L) return true;
    L = L.__proto__;
  }
};
