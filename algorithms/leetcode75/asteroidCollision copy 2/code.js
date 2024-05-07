/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head.next) return null;

  let cur = head;
  let mid = head;
  let prevMid = null;

  while (cur && cur.next) {
    cur = cur.next.next;
    prevMid = mid;
    mid = mid.next;
  }

  prevMid.next = prevMid.next.next;

  return head;
};

module.exports = { deleteMiddle, ListNode };
