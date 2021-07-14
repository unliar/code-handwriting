Function.prototype.myApply = function (ctx = globalThis) {
  ctx.fn = this;
  const args = [...arguments].slice(1);
  const res = ctx.fn(args);
  delete ctx.fn;
  return res;
};

Function.prototype.myCall = function (ctx = globalThis) {
  // 如果怕冲突 用 const fn = Symbol(ctx)
  ctx.fn = this;
  const args = [...arguments].slice(1);
  const res = ctx.fn(...args);
  delete ctx.fn;
  return res;
};

Function.prototype.myBind = function (ctx = globalThis) {
  const that = this;
  const args = [...arguments].slice(1);
  return function () {
    return that.apply(ctx, [...arguments, ...args]);
  };
};
