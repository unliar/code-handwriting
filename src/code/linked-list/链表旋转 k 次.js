/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * @link https://leetcode-cn.com/problems/rotate-list/
 * @description 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 */
var rotateRight = function(head, k) {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (k--) {
    fast = fast?.next || head;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = head;
  const res = slow.next;
  slow.next = null;
  return res;
};
