// 核心代码
// 返回一个koa中间件函数
// 核心 dipatch 函数返回 promose resolve
/**
 *
 * @param  middlewares
 */
const compose = (middlewares) => {
  return function (ctx, next) {
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      index = i;

      let fn = middlewares[i];
      if (i == middlewares.length) {
        fn = next;
      }
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(ctx, function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
};
