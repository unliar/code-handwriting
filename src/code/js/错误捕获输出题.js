function wait() {
  return new Promise(() => {
    throw new Error("1111");
    // 如果+了settimeout？
    // 会报错，因为setTimeout是异步的
    // 无法捕获
  });
}

async function foo() {
  try {
    wait();
    // 只能捕获同步错误，异步错误不能捕获
    // +个 await 可以捕获异步错误
  } catch (error) {
    console.log("222");
    console.log(error);
    console.log("3333");
  }
}

foo();
