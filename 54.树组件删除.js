const arr = [
  {
    id: 1,
    list: [
      {
        id: 2,
        list: [
          {
            id: 3,
            list: [],
          },
          {
            id: 4,
            list: [{ id: 5, list: [] }],
          },
        ],
      },
    ],
  },
];

function traversal(data) {
  for (let i = 0; i < data.length; i++) {
    const info = data[i];
    if (info.list) {
      // 存在树组件就递归
      if (info.list.length > 0) {
        traversal(info.list);
      }
      // 否则就删除
      if (info.list.length === 0) {
        const index = data.findIndex((item) => info.id === item.id);
        data.splice(index, 1);
        // 有删除不干净的原因
        i--;
      }
    }
  }
}

traversal(arr);
console.log(arr);
