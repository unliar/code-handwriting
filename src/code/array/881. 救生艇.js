/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 * @description
 * 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

 

示例 1：

输入：people = [1,2], limit = 3
输出：1
解释：1 艘船载 (1, 2)

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/boats-to-save-people
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);
  let right = people.length - 1;
  let left = 0;
  let res = 0;
  while (left < right) {
    // 当最大和最小一起坐船超载时,那个较大只的就只能一个人坐一次船
    if (people[left] + people[right] > limit) {
      right--;
    } else {
      left++;
      right--;
    }
    // 遍历一次+1船
    res++;
  }
  if (left == right) {
    res++;
  }
  return res;
};
