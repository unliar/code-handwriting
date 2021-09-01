/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 * @description
 * 给定两个版本号version1和version2，你需要返回一个整数，代表他们的比较结果。
 * 示例 1：

输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/compare-version-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var compareVersion = function(version1, version2) {
  // 拆分为数组
  const [v1, v2] = [version1.split("."), version2.split(".")];
  // 选择较大的数组长度
  const len = Math.max(v1.length, v2.length);
  // 循环比较
  for (let index = 0; index < len; index++) {
    // 强转为数字
    const n1 = +(v1[index] || 0);
    const n2 = +(v2[index] || 0);
    if (n1 > n2) return 1;
    if (n1 < n2) return -1;
  }
  return 0;
};

console.log(compareVersion("1.01.1.1.1.1", "1.001"));
