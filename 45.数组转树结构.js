let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

function convert(array) {
  let res = array.filter((item) => {
    // 获取子节点
    let children = array.filter((child) => {
      return item.id === child.parentId;
    });
    item.children = children;

    // 获取没有父节点的item 也就是说这些节点是父节点
    return item.parentId === 0;
  });
  return res;
}
let res = convert(list);

console.log(JSON.stringify(res));
