/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let fast = head;
  let slow = head;
  let n = 0;
  // 快慢指针 让快的先走k步
  while (fast) {
    fast = fast.next;
    if (n >= k) {
      slow = slow.next;
    }
    n++;
  }
  return slow;
};
