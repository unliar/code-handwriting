/**
 * @param {number[]} score
 * @return {string[]}
 * @link https://leetcode-cn.com/problems/relative-ranks/
 * @desc 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。
 * 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：
 * @author 远浅
 */
var findRelativeRanks = function(score) {
  const res = [];
  // 排序一下
  const x = [...score].sort((a, b) => b - a);
  // 循环一下原数组
  for (let index = 0; index < score.length; index++) {
    const v = score[index];
    // 查找一下值在的位置索引
    const t = x.findIndex((i) => i == v) + 1;
    switch (t) {
      case 1:
        res.push("Gold Medal");
        break;
      case 2:
        res.push("Silver Medal");
        break;
      case 3:
        res.push("Bronze Medal");
        break;
      default:
        res.push(`${t}`);
    }
  }
  return res;
};
