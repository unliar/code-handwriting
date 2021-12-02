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
 * @link https://leetcode-cn.com/problems/balanced-binary-tree/
 * @description 检查二叉树是否平衡
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 */
var isBalanced = function (root) {
  // 计算树的深度
  const dep = (node) => {
    if (!node) return 0;
    return Math.max(dep(node.right), dep(node.left)) + 1;
  };

  if (!root) return true;
  // 左右子树的深度差不能超过1
  return (
    Math.abs(dep(root.left) - dep(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
