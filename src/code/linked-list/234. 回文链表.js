/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * @link https://leetcode-cn.com/problems/palindrome-linked-list/
 * @description 判断一个链表是否为回文链表
 */
var isPalindrome = function(head) {
  // 用数组存储每个节点的值
  // pop出来的值等于顺序遍历的值
  let res = [];
  let cur = head;
  while (cur) {
    res.push(cur.val);
    cur = cur.next;
  }

  while (head) {
    if (res.pop() != head.val) {
      return false;
    }
    head = head.next;
  }
  return true;
};
