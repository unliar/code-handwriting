/**
 * 获取二进制数中1的个数
 * @param {number} n
 */
const count1 = (n) => {
  return n.toString(2).replace(/0/g, "").length;
};
