const New = (fn, ...args) => {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, args);
  return ret instanceof Object ? ret : obj;
};

const Create = (proto) => {
  function F() {}
  F.prototype = proto; // 将原型挂在构造函数的prototype上
  F.prototype.constructor = F;
  return new F(); // 返回新对象
};
