/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 思路：递归，判断左右子树的深度是否相差不大于1，如果不大于1，则说明是平衡二叉树
 * @link https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
 */
var isBalanced = function(root) {
  if (root == null) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(deep(root.left) - deep(root.right)) < 2
  );
};

const deep = (root) => {
  if (root == null) return 0;
  return Math.max(deep(root.left), deep(root.right)) + 1;
};
