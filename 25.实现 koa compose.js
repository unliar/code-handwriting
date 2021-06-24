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

async function test1(ctx, next) {
  console.log("中间件1上");
  await next();
  console.log("中间件1下");
}

async function test2(ctx, next) {
  console.log("中间件2上");
  await next();
  console.log("中间件2下");
}

async function test3(ctx, next) {
  console.log("中间件3上");
  await next();
  console.log("中间件3下");
}
let middleware = [test1, test2, test3];

let cp = compose(middleware);

cp("ctx", function () {
  console.log("中心");
});
