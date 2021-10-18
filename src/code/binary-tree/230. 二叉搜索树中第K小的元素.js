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
 * @param {number} k
 * @return {number}
 * @description 中序遍历
 */
var kthSmallest = function(root, k) {
  const values = [];
  const dfs = (node) => {
    if (node == null) return;
    dfs(node.left);
    values.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return values[k - 1];
};
