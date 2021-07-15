/**
 *
 * @param {Promise[]} promises
 * @param {number} limit
 */
class Plimit {
  constructor(limit) {
    this.limit = limit;
    // 当前并发
    this.runningCount = 0;
    // 消费队列
    this.queue = [];
    // 结果值
    this.results = [];
  }

  all(promises = []) {
    return new Promise((resolve, reject) => {
      for (const p of promises) {
        this._run(p, resolve, reject);
      }
    });
  }

  _run(promise, resolve, reject) {
    if (this.runningCount >= this.limit) {
      this.queue.push(promise);
      return;
    }

    ++this.runningCount;
    promise
      .then((res) => {
        this.results.push(res);
        --this.runningCount;
        // 队列为0 且 runnin 为 0 说明结束了
        if (this.queue.length === 0 && this.runningCount === 0) {
          return resolve(this.results);
        }
        // 队列还有数值 取出第一个继续run
        if (this.queue.length) {
          this._run(this.queue.shift(), resolve, reject);
        }
      })
      .catch(reject);
  }
}

const fs = (n) =>
  new Promise((y) => {
    console.log("start", n);
    setTimeout(() => {
      console.log("end", n);
      y(n);
    }, 2000);
  });

const plimit = new Plimit(2);
plimit
  .all([fs(1), fs(2), fs(3), fs(4), fs(5), fs(6)])
  .then((r) => console.log(r));
