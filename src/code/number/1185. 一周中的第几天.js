/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * @link https://leetcode-cn.com/problems/day-of-the-week/
 */
var dayOfTheWeek = function(day, month, year) {
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  date.setFullYear(year, month - 1, day);
  return weeks[date.getDay()];
};
