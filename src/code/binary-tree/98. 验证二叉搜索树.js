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
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/validate-binary-search-tree/
 * @description 思路：中序遍历，每次遍历到的值都要比前一个值小，否则返回false
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (root == null) return true;
  const v = root.val;
  if (v <= min || v >= max) return false;
  // 限定左子树的最大值为当前节点值
  // 右子树的最小值为当前值
  return isValidBST(root.left, min, v) && isValidBST(root.right, v, max);
};
