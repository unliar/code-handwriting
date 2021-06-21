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
 */
var isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (x, y) => {
    if (x == null && y == null) {
      return true;
    }
    if (x == null || y == null || x.val != y.val) {
      return false;
    }
    return isMirror(x.left, y.right) && isMirror(x.right, y.left);
  };

  return isMirror(root, root);
};
