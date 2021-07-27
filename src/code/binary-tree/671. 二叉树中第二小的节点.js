// @ts-nocheck

/**
 * 
 * @description
 * 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

更正式地说，root.val = min(root.left.val, root.right.val) 总成立。

给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  if (!root) return -1;
  let min = root.val;
  let list = [root];
  let second = Infinity;
  while (list.length) {
    const n = list.shift();
    const v = n.val;
    if (v > min && v < second) {
      if (second === Infinity) {
        second = v;
      } else {
        return v;
      }
    }
    n.left && list.push(n.left);
    n.right && list.push(n.right);
  }
  return second == Infinity ? -1 : second;
};
