// 花式标记法
const hasCycle = (head) => {
  while (head) {
    if (head.t) return true;
    head.t = 1;
    head = head.next;
  }
  return false;
};

// js骚操作法
const hasCycle2 = (head) => {
  try {
    JSON.stringify(head);
    return true;
  } catch (_) {
    return false;
  }
};

// 快慢指针法
const hasCycle3 = (head) => {
  if (head == null || head.next == null) return false;
  let fast = head.next;
  let slow = head;
  while (head != null && fast != null) {
    if (fast == slow) return true;
    slow = slow?.next || null;
    fast = fast?.next?.next || null;
  }
  return false;
};
