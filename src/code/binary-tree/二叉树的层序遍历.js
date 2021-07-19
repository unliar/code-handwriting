const LevelTravel = (root) => {
  if (!root) return [];
  const queue = [root];
  const res = [];
  let level = 0;
  // 判断同层数组
  while (queue.length) {
    // 初始化 level 层级
    res[level] = [];
    let levelLength = queue.length;

    while (levelLength--) {
      const node = queue.shift();
      res[level].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    level++;
  }
  return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 剑指 Offer 32 - III. 从上到下打印二叉树 III
 * @link https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  if (!root) return res;
  let level = 0;
  let q = [root];
  while (q.length) {
    res[level] = [];
    let len = q.length;
    // 判断本层是否需要逆序
    const reverse = level % 2;
    while (len--) {
      const n = q.shift();
      // 插入方式切换
      reverse ? res[level].unshift(n.val) : res[level].push(n.val);
      n.left && q.push(n.left);
      n.right && q.push(n.right);
    }
    level++;
  }
  return res;
};
