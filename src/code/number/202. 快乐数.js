/**
 * @param {number} n
 * @return {boolean}
 * @description 判断一个整数是否是快乐数。
 * @link https://leetcode-cn.com/problems/happy-number/
 */
var isHappy = function(n, arr = []) {
  let rr = [...arr];
  let t = 0;
  for (const i of `${n}`) {
    t += +i * +i;
  }
  // 如果出现重复的数据就说明不是快乐数
  if (arr.includes(t)) return false;
  if (t === 1) return true;
  rr.push(t);
  return isHappy(t, rr);
};
