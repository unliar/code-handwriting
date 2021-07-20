/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const arr = Array(n).fill(0);
  arr[0] = 1;
  let p2 = 0,
    p3 = 0,
    p5 = 0;
  for (let i = 1; i < n; i++) {
    let last = arr[i - 1];
    while (last >= arr[p2] * 2) p2++;
    while (last >= arr[p3] * 3) p3++;
    while (last >= arr[p5] * 5) p5++;
    arr[i] = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
  }
  return arr[n - 1];
};
