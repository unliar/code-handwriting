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
 * @return {void} Do not return anything, modify root in-place instead.
 * @link https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 * @desc 展开二叉树成链表
 */
var flatten = function(root) {
  if (!root) return null;
  const left = root.left;
  const right = root.right;
  flatten(left);
  flatten(right);
  root.right = left;
  root.left = null;
  // 遍历右
  while (root.right) root = root.right;
  root.right = right;
};
