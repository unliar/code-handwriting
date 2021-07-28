var isValid = function(s) {
  const arr = [];
  const obj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const v = Object.values(obj);
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    // 左括号入栈
    if (v.includes(element)) {
      arr.push(element);
      // 相邻的括号必须是出栈匹配的右括号
    } else if (obj[element] != arr.pop()) {
      return false;
    }
  }
  return arr.length === 0;
};
