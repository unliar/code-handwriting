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
 * @param {number} val
 * @return {TreeNode}
 * @author 远浅
 * @link https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
 * @description 搜索二叉搜索树
 */
var searchBST = function(root, val) {
  if (!root || root.val == val) return root;
  // 如果目标值比当前节点的值小，则在左子树中查找，否则在右子树中查找
  return root.val > val
    ? searchBST(root.left, val)
    : searchBST(root.right, val);
};
