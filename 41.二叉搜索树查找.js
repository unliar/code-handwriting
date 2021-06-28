var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);
  if (root.val >= val) {
    //比该节点大查找左节点
    root.left = insertIntoBST(root.left, val);
  } else {
    //比该节点小查找右节点
    root.right = insertIntoBST(root.right, val);
  }
  return root;
};

// 作者：wang-qi-e-125-o
// 链接：https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/solution/sou-suo-er-cha-shu-te-xing-di-gui-cha-zhao-by-wang/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
