const SearchMatri = (arr, val) => {
  const rowLen = arr.length;
  if (!rowLen) return false;
  const colLen = arr[0].length;
  let row = 0;
  let col = colLen - 1;
  while (col >= 0 && row < rowLen) {
    const cur = arr[row][col];
    if (cur == val) return true;
    if (cur > val) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};
