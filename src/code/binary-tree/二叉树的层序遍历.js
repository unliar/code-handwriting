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

const LevelTravel2 = (node) => {
  const res = [];
  let level = 0;
  const queue = [node];
  while (queue.length) {
    res[level] = [];
    let len = queue.length;
    while (len--) {
      const n = queue.shift();
      res[level].push(n.val);
      n.left && queue.push(n.left);
      n.right && queue.push(n.val);
    }
    level++;
  }
  return res;
};
