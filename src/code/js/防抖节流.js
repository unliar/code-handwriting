// 💊点  每次都返回 一个函数

function Denounce(fn, wait = 500) {
  let timer = null;
  return function() {
    // 每次都clearTime
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, wait);
  };
}

function Throtte(fn, wait = 500) {
  let timer = null;
  return function() {
    // 存在就拉闸 不然执行后续的
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, wait);
  };
}
