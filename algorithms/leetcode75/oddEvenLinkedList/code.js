/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  const oddHeadDummy = new ListNode();
  let oddTail = oddHeadDummy;
  const evenHeadDummy = new ListNode();
  let evenTail = evenHeadDummy;
  let count = 0;
  let cur = head;

  while (cur) {
    const next = cur.next;
    if (count % 2 === 0) {
      oddTail.next = cur;
      oddTail = cur;
    } else {
      evenTail.next = cur;
      evenTail = cur;
    }
    cur.next = null;
    cur = next;
    count++;
  }

  oddTail.next = evenHeadDummy.next;
  return oddHeadDummy.next;
};

module.exports = { oddEvenList };
