/**
 * 射击运动员 10 枪 90 分
 * @param {number} c 次数
 * @param {number} score 分数
 */

const Count = (c, score) => {
  if (c < 0 || score > c * 10) {
    return 0;
  }
  // 剩余一次开枪的机会 并且得分在 0-10 分
  if (c == 1 && score < 10 && score > 0) {
    return 1;
  }
  // 枪枪满分
  if (c * 10 == score) {
    return 1;
  }
  let t = 0;
  // 其余情况 开枪
  for (let index = 0; index <= 10; index++) {
    t += Count(c - 1, score - index);
  }
  return t;
};

console.log(Count(10, 90));
