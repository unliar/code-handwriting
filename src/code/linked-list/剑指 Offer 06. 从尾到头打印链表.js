/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let cur = head;
  const res = [];
  while (cur) {
    res.unshift(cur.val);
    cur = cur.next;
  }
  return res;
};
