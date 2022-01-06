/**
 * @param {string} path
 * @return {string}
 * @description 简化路径
 * @link https://leetcode-cn.com/problems/simplify-path/
 */
var simplifyPath = function(path) {
  const res = [];
  for (const p of path.split("/")) {
    // 正常路径push进去
    if (p != "." && p != "" && p != "..") {
      res.push(p);
      // 如果是..，则pop出最后一个元素
    } else if (p == ".." && res.length > 0) {
      res.pop();
    }
  }

  return `/${res.join("/")}`;
};
