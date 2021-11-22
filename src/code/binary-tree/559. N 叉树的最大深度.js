/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @author 远浅
 * @param {Node|null} root
 * @return {number}
 * @description 559. N 叉树的最大深度
 * @link https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let res = 0;
  for (const child of root.children) {
    // 子树的最大深度
    res = Math.max(res, maxDepth(child));
  }
  return res + 1;
};
