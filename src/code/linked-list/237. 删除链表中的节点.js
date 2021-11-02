/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @link https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
 */
var deleteNode = function(node) {
  [node.val, node.next] = [node.next.val, node.next.next];
};
