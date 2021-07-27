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
