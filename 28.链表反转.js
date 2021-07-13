const reverseLinked = (head) => {
  let pre = null;
  let cur = head;
  while (cur != null) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;

  const next = head.next;

  const r = reverseList(next);

  head.next = null;

  next.next = head;

  return r;
};
