/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    const y1 = `${a}${b}`;
    const y2 = `${b}${a}`;
    return +y1 - +y2;
  });
  return nums.join("");
};

console.log(minNumber([9, 222, 333, 444]));
