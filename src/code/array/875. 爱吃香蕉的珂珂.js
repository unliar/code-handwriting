/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let minSpeed = 1;
  let maxSpeed = Math.max(...piles);
  while (minSpeed < maxSpeed) {
    let mid = ~~((minSpeed + maxSpeed) / 2);
    // mid速度耗时大于h小时
    // 说明mid太慢了
    if (calc(piles, mid) > h) {
      minSpeed = mid + 1;
    } else {
      maxSpeed = mid;
    }
  }
  return minSpeed;
};

// h小时回来的总耗时
const calc = (piles, h) => {
  let t = 0;
  piles.forEach((p) => {
    t += Math.ceil(p / h);
  });
  return t;
};
