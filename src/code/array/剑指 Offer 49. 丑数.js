/**
 * 丑数
 * @link https://leetcode-cn.com/problems/chou-shu-lcof/
 * @description
 * 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
 *
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const arr = Array(n).fill(0);
  arr[0] = 1;
  let p1 = 0,
    p2 = 0,
    p3 = 0;
  for (let i = 1; i < n; i++) {
    const last = arr[i - 1];
    while (last >= arr[p1] * 2) p1++;
    while (last >= arr[p2] * 3) p2++;
    while (last >= arr[p3] * 5) p3++;
    arr[i] = Math.min(arr[p1] * 2, arr[p2] * 3, arr[p3] * 5);
  }
  return arr[n - 1];
};
