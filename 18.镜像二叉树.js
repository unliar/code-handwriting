const TreeReverse = (node) => {
  if (!node) return node;
  [node.left, node.right] = [TreeReverse[node.right], TreeReverse[node.left]];
  return node;
};
