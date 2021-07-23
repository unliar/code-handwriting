class EventEmitter {
  constructor() {
    this.events = {};
  }
  // 激活事件
  emit(event, ...args) {
    if (!this.events[event]) {
      return;
    }
    // 遍历所有事件监听器
    this.events[event].forEach((item) => item(...args));
  }
  // 监听事件
  on(event, listener) {
    if (!event || !listener) {
      return;
    }
    // 初始化
    if (!this.events[event]) {
      this.events[event] = [listener];
    } else {
      this.events[event].push(listener);
    }
  }
  // 移除事件
  off(event, listener) {
    if (!listener) {
      delete this.events[event];
      return;
    }
    this.events = this.events.filter((item) => item != listener);
  }
  once(event, listener) {
    const ons = () => {
      // 执行listener后移除
      listener(...arguments);
      this.off(event, ons);
    };
    this.on(event, ons);
  }
}
