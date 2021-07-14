// 利用 map 对象的有序
// 将最常用的 kv 塞到底部

class LRU {
  constructor(size) {
    this.cache = new Map();
    this.size = size;
  }
  get(k) {
    if (!this.cache.has(k)) return null;
    const v = this.cache.get(k);
    this.cache.delete(k);
    this.cache.set(k, v);
    return v;
  }
  put(k, v) {
    if (this.cache.has(k)) {
      this.cache.delete(k);
    }
    this.cache.set(k, v);
    if (this.cache.size > this.size) {
      const top = this.cache.keys().next().value;
      this.cache.delete(top);
    }
  }
}
