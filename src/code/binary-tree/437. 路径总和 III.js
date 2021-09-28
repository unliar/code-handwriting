/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 * @description 寻找和为目标值的路径个数
 * @link https://leetcode-cn.com/problems/path-sum-iii/
 */
var pathSum = function(root, targetSum) {
  // 双递归查询
  if (root == null) return 0;
  let x = Sum(root, targetSum);
  let y = pathSum(root.left, targetSum);
  let z = pathSum(root.right, targetSum);
  return x + y + z;

  function Sum(root, num) {
    if (root == null) return 0;
    num -= root.val;
    let t = 0;
    // 如果相等 就说明已经找到目标值了
    if (num == 0) {
      t = 1;
    }
    let x = Sum(root.left, num);
    let y = Sum(root.right, num);
    return t + x + y;
  }
};
