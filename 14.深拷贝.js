// 判断是否是数组
const isArray = (src) => Object.prototype.toString.call(src).includes("Array");
// 判断是否是对象
const isObject = (src) =>
  Object.prototype.toString.call(src).includes("Object");

// 还有很多类型....

// 具体实现
const DeepClone = (src) => {
  let res = null;
  // 非数组 或者 对象
  if (!isArray(src) && !isObject(src)) {
    res = src;
  }
  // 数组
  if (isArray(src)) {
    res = [];
    src.forEach((item, index) => {
      res[index] = DeepClone(item);
    });
  }
  // 对象
  if (isObject(src)) {
    res = {};
    for (const key in src) {
      if (Object.hasOwnProperty.call(src, key)) {
        res[key] = DeepClone(src[key]);
      }
    }
  }
  return res;
};
