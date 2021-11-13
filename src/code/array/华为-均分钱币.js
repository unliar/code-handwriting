/**
 * 均分钱币
 * @param {number[]} arr
 * @description
 * 给你一堆硬币，让你分成两堆，分别给A，B两个人，求两人得到的最小差。
 */
function DividingCoins(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let half = ~~(sum / 2);
  let dp = [];
  for (let i = 0; i < arr.length; i++) {
    // 最小差
    // 就是选出和最接近half的那个数
    for (let j = half; j >= arr[i]; j--) {
      dp[j] = Math.max(dp[j] || 0, (dp[j - arr[i]] || 0) + arr[i]);
    }
  }
  return sum - 2 * dp[half];
}

console.log(DividingCoins([2, 3, 100, 101]));
