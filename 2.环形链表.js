const hasCycle = (head) => {
  while (head) {
    if (head.t) return true;
    head.t = 1;
    head = head.next;
  }
  return false;
};
