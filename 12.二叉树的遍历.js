const Travel = (node) => {
  const result = [];
  if (!node) return result;
  const src = [node];
  while (src.length > 0) {
    const n = src.shift();
    result.push(n.val);
    n.left && src.push(n.left);
    n.right && src.push(n.right);
  }
};
