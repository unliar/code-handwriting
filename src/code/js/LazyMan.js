/**
 * 这个的核心原理就是使用队列存储要执行的任务
 * 每次有新的 action 时,存储并且消费点执行队列的所有任务函数。
 */
class LM {
  constructor(name) {
    this.name = name;
    this.q = [];
    this.timer = null;
    this._hi();
  }
  exec() {
    clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      for (let index = 0; index < this.q.length; index++) {
        await this.q[index]();
      }
    });
    return this;
  }
  sleep(n) {
    this.q.push(() => this._wait(n));
    return this.exec();
  }
  sleepFirst(n) {
    this.q.unshift(() => this._wait(n));
    return this.exec();
  }
  eat(str) {
    this.q.push(() => {
      console.log("eat", str);
    });
    return this.exec();
  }
  _hi() {
    this.q.push(() => {
      console.log("hi", this.name);
    });
    return this.exec();
  }
  _wait(time) {
    return new Promise((y) => {
      setTimeout(() => {
        console.log("wake up after " + time + "s");
        y();
      }, time * 1000);
    });
  }
}

const LazyMan = (name) => {
  return new LM(name);
};

LazyMan("雷峰").sleep(5).sleepFirst(2).eat("吃屎");
