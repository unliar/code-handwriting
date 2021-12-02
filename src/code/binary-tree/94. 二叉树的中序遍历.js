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
 * @return {number[]}
 * @description 二叉树的中序遍历
 * @link https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */
var inorderTraversal = function (root) {
  const res = [];
  //中序遍历递归
  const travel = (node) => {
    if (!node) return;
    travel(node.left);
    res.push(node.val);
    travel(node.right);
  };
  travel(root);
  return res;
};
