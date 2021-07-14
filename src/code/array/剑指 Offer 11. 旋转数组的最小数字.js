/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < numbers[0]) {
      return numbers[index];
    }
  }
  return numbers[0];
};
