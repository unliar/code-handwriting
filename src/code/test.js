// 反转链表

const reverseLinkedList = (head) => {
  if (!head || !head.next) return head;
  const next = head.next;
  const r = reverseLinkedList(next);
  head.next = null;
  next.next = head;
  return r;
};

// 最长子串
const maxSubString = (s) => {
  let str = "";
  let max = 0;
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    const sindex = str.indexOf(element);
    if (sindex > -1) {
      str = str.substring(sindex + 1);
    }
    str += element;
    max = Math.max(str.length, max);
  }
  return max;
};

//console.log(maxSubString("b"));

// 字符串的全排列
const stringList = (str) => {
  const set = new Set();
  const len = str.length;
  if (len == 0) return [str];

  for (let index = 0; index < len; index++) {
    const element = str[index];
    const exElement = str.substring(0, index) + str.substring(index + 1);
    stringList(exElement).forEach((i) => {
      set.add(`${element}${i}`);
    });
  }
  return [...set];
};

const stringList2 = (s) => {
  const res = new Set();
  const v = {};
  const dfs = (path) => {
    if (path.length === s.length) return res.add(path);
    for (let i = 0; i < s.length; i++) {
      if (v[i]) continue;
      v[i] = true;
      dfs(path + s[i]);
      v[i] = false;
    }
  };
  dfs("");
  return [...res];
};

console.log(stringList("ab"), stringList2("ab"));

const CreateNew = (f, ...arg) => {
  // 创建对象
  const obj = Object.create(f.prototype);
  // 绑定this
  const ret = f.apply(obj, arg);
  // 内部可能返回一个函数
  return ret instanceof Object ? ret : obj;
};

const Create = (f) => {
  function F() {}
  F.prototype = f;
  F.prototype.constructor = F;

  return new F();
};

Function.prototype.myApply = function(ctx = globalThis) {
  ctx.fn = this;
  const args = [...arguments].slice(1);
  const ref = ctx.fn(args);
  delete ctx.fn;
  return ref;
};

const qParse = (str) => {
  const obj = {};
  str.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => {
    obj[k] = v;
  });
  return obj;
};

console.log(qParse("?a=d&d=1"));

const quickSort = (arr) => {
  // 递归退出条件
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const mid = arr.shift();
  arr.forEach((item) => {
    if (item >= mid) {
      right.push(item);
    } else {
      left.push(item);
    }
  });
  return quickSort(left).concat(mid, quickSort(right));
};

console.log(quickSort([10, 5, 2, , 23, , 2, 323, 2, 2, 2, 99999, 1, -999]));
