const arr = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 3,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    children: [
      {
        id: 5,
        children: [
          {
            id: 6,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    children: [
      {
        id: 8,
        children: [
          {
            id: 9,
          },
        ],
      },
    ],
  },
];

const getid = (arr) => {
  const idArr = [];
  const queue = [...arr];
  while (queue.length > 0) {
    const node = queue.pop();
    idArr.push(node.id);
    if (node.children) {
      queue.push(...node.children);
    }
  }
  return idArr;
};

const getid2 = (arr) => {
  const idArr = [];
  arr.forEach((node) => {
    idArr.push(node.id);
    if (node.children) {
      idArr.push(...getid2(node.children));
    }
  });
  return idArr;
};

console.log(getid(arr), getid2(arr));
