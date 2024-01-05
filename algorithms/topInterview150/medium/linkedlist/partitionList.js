/*
Given the head of a linked list and a value x, 
partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
Example 1:
Input: head = [1,4,3,2,5,2], x = 3
1 -> 4 -> 3 -> 2 -> 5 -> 2   ==> 1 -> -> 2 -> 2 -> 4 -> 3 -> 5
     *    x         *                              *    x    *
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]
*/

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
