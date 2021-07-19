const reverseLinked = (head) => {
  let pre = null;
  let cur = head;
  while (cur != null) {
    const next = cur.next;
    // 暂存next
    cur.next = pre;
    pre = cur;
    //
    cur = next;
  }
  return pre;
};

const reverseList1 = function(head) {
  if (!head || !head.next) return head;

  const next = head.next;

  const r = reverseList1(next);

  head.next = null;

  next.next = head;

  return r;
};

const reverseList2 = function(head) {
  return reverse(null, head);
};

function reverse(prev, curr) {
  if (!curr) return prev;
  const tmp = curr.next;
  curr.next = prev;
  return reverse(curr, tmp);
}
