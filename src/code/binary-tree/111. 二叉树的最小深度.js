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
 * @return {number}
 * @link https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * @description 求二叉树的最小深度
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) {
    // 只有右子树
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    // 只有左子树
    return 1 + minDepth(root.left);
  }
  // 左右子树都有
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
