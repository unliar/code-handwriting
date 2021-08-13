/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 * @description
 * https://leetcode-cn.com/problems/angle-between-hands-of-a-clock/
 * 两个时钟指针，指向两个时钟，问两个时钟指针夹角的角度。
 */
var angleClock = function(hour, minutes) {
  const oneMinAg = 6; // 360/60 -- 60个分钟走一圈
  const oneHourAg = 30; // 360/12 -- 12个小时走一圈
  // 分钟
  const mAg = minutes * oneMinAg; // 分钟度数
  // 时针度数
  const hAg = ((hour % 12) + minutes / 60) * oneHourAg;
  // 相减
  const abs = Math.abs(mAg - hAg);
  // 取夹角最小值
  return Math.min(abs, 360 - abs);
};
