// 花式标记法
/**
 * @description
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  while (head) {
    if (head.t) return true;
    head.t = 1;
    head = head.next;
  }
  return false;
};

// js骚操作法
const hasCycle2 = (head) => {
  try {
    JSON.stringify(head);
    return true;
  } catch (_) {
    return false;
  }
};

// 快慢指针法
const hasCycle3 = (head) => {
  if (head == null || head.next == null) return false;
  let fast = head.next;
  let slow = head;
  while (head != null && fast != null) {
    if (fast == slow) return true;
    slow = slow?.next || null;
    fast = fast?.next?.next || null;
  }
  return false;
};
