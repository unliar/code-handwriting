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
 * @description
 * 给定一个二叉树，计算 整个树 的坡度 。

一个树的 节点的坡度 定义即为，该节点左子树的节点之和和右子树节点之和的 差的绝对值 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。

整个树 的坡度就是其所有节点的坡度之和。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-tilt
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findTilt = function(root) {
  let res = 0;
  if (!root) return res;
  // 也没啥 就递归套娃
  const sum = (node) => {
    if (!node) return 0;
    return sum(node.left) + sum(node.right) + node.val;
  };
  return (
    Math.abs(sum(root.left) - sum(root.right)) +
    findTilt(root.left) +
    findTilt(root.right)
  );
};
