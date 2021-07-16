/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  if (head == null) return null;
  if (head.val == val) {
    return deleteNode(head.next, val);
  } else {
    head.next = deleteNode(head.next, val);
    return head;
  }
};
