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
