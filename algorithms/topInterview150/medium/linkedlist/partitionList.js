/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummy = new ListNode(0, head);
  let cur = head;
  let anchor = dummy;
  while (cur) {
    if (cur.val < x) {
      anchor = cur;
    } else {
      while (cur.next && cur.next.val < x) {
        const target = cur.next;
        cur.next = cur.next.next;
        const anchorNext = anchor.next;
        anchor.next = target;
        target.next = anchorNext;
        anchor = target;
      }
    }
    cur = cur.next;
  }
  return dummy.next;
};
