const isPalindrome = (x) => {
  const str = `${x}`;
  const len = str.length - 1;
  for (let index = 0; index < len; index++) {
    if (str[index] != str[len - index]) return false;
  }
  return true;
};
