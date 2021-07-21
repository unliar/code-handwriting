/**
 * 删除倒数第N个节点
 * @link https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */
var removeNthFromEnd = function(head, n) {
  if (!head) return null;
  let fast = head;
  let slow = new ListNode();
  slow.next = head;
  let cur = slow;
  while (fast) {
    if (n-- <= 0) slow = slow.next; // 让 fast 先走n步
    fast = fast.next;
  }
  slow.next = slow.next.next; // 把指针指向下下个，就达到删除效果
  return cur.next;
};
