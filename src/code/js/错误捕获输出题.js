function wait() {
  return new Promise(() => {
    throw new Error("1111");
  });
}

async function foo() {
  try {
    wait();
    // 只能捕获同步错误，异步错误不能捕获
  } catch (error) {
    console.log("222");
    console.log(error);
    console.log("3333");
  }
}

foo();
