/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 * @description
 * 
 * 一个班级里有 n 个学生，编号为 0 到 n - 1 。每个学生会依次回答问题，编号为 0 的学生先回答，然后是编号为 1 的学生，以此类推，直到编号为 n - 1 的学生，然后老师会重复这个过程，重新从编号为 0 的学生开始回答问题。

给你一个长度为 n 且下标从 0 开始的整数数组 chalk 和一个整数 k 。一开始粉笔盒里总共有 k 支粉笔。当编号为 i 的学生回答问题时，他会消耗 chalk[i] 支粉笔。如果剩余粉笔数量 严格小于 chalk[i] ，那么学生 i 需要 补充 粉笔。

请你返回需要 补充 粉笔的学生 编号 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var chalkReplacer = function(chalk, k) {
  let sum = chalk.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  // 取余减少轮数遍历
  k = k % sum;
  for (let index = 0; index < chalk.length; index++) {
    // 如果k是负数了 说明要补充了
    k = k - chalk[index];
    if (k < 0) return index;
  }
};
