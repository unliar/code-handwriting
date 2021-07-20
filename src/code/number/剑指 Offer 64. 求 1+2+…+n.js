/**
 * 剑指 Offer 64. 求1+2+…+n
 * @description
 * 不能使用乘除法
 * @link https://leetcode-cn.com/problems/qiu-12n-lcof/
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  return n && n + sumNums(n - 1);
};
