/**
 * @param {string} s
 * @return {string}
 * @description 原生API 两者测试用例无性能区别...
 */
var reverseWords = function(s) {
  return s
    .split(" ")
    .filter((i) => i !== "")
    .map((i) => i.trim())
    .reverse()
    .join(" ");
};

/**
 * @param {string} s
 * @return {string}
 * @description 遍历字符按条件截断
 */
var reverseWords = function(s) {
  let res = "";
  let temp = "";
  for (let str of s) {
    // 如果字符串不为空 拼接字符串
    if (str != " ") {
      temp += str;
    } else {
      // str 字符串为空且 temp 字符串不为空 说明该截断。
      if (temp != "") {
        res = c(temp, res);
        temp = "";
      }
    }
  }
  // 最后一个单词处理
  if (temp != "") res = c(temp, res);
  return res;

  // 为了不调用trim()方法
  function c(temp, res) {
    return res == "" ? temp : temp + " " + res;
  }
};
