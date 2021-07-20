/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 *
 * @description
 * 链表的相遇问题
 *
 * @link https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headB == null || headA == null) return null;
  let a = headA;
  let b = headB;
  while (a != b) {
    // 双指针 互相交换
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return b;
};
