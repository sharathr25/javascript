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
 */
var rotateRight = function (head, k) {
  if (k === 0) return head;

  let count = 0;
  let last = null;
  let cur = head;

  while (cur) {
    count++;
    if (!cur.next) last = cur;
    cur = cur.next;
  }

  k = k % count;

  if (count == 0 || k == 0) return head;

  let t = count - k;
  cur = head;
  while (t !== 0) {
    t--;
    const next = cur.next;
    if (t === 0) cur.next = null;
    cur = next;
  }

  last.next = head;

  return cur;
};
