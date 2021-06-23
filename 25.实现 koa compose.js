// 核心代码
// 返回一个koa中间件函数
// 核心 dipatch 函数返回 promose resolve
const compose = (middwares) => {
  return function (ctx, next) {
    return dispatch(0);
    function dispatch(i) {
      return Promise.resolve();
    }
  };
};
