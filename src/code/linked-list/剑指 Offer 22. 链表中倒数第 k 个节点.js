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
 * @link https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */
var getKthFromEnd = function(head, k) {
  let fast = head;
  let slow = head;

  // 快慢指针 让快的先走k步
  while (fast) {
    fast = fast.next;
    if (k-- <= 0) {
      slow = slow.next;
    }
  }
  return slow;
};
