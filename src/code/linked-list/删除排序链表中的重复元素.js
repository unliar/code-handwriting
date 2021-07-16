/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 83. 删除排序链表中的重复元素
 * @
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // 无节点退出
  if (!head || !head.next) return head;
  // 获取当前节点和下个节点的值
  const v = head.val;
  const nv = head.next.val;
  // 如果相等 就跳过下一个
  if (nv == v) {
    head = head.next;
  }

  let node = deleteDuplicates(head.next);

  // 下下个还是相等继续跳
  if (node && node.val == v) {
    node = node.next;
  }

  head.next = node;

  return head;
};
