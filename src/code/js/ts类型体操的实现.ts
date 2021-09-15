// 实现 MyPick
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k];
};

// 实现 Partial
type MyPartial<T> = {
  [k in keyof T]?: T[k];
};
