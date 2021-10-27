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
 * @description 求二叉树的最大深度
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function(root) {
  // 思路 递归求深度
  return root == null
    ? 0
    : Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
