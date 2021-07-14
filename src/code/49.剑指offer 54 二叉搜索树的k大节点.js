/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @link https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  const arr = [];
  const node = [root];
  while (node.length) {
    const n = node.pop();
    arr.push(n.val);
    n.left && node.push(n.left);
    n.right && node.push(n.right);
  }
  return arr.sort((a, b) => b - a)[k - 1];
};
