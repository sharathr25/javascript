/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

    1 -> 2 -> 3 -> 4 -> 5
            |
            v
    1 -> 2 -> 3 ------> 5

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // get total nodes
  let total = 0;
  let current = head;
  while (current) {
    total++;
    current = current.next;
  }

  // traveral upto nth node from the end
  current = head;
  let prev = null;
  while (total !== n) {
    total--;
    prev = current;
    current = current.next;
  }

  // remove nth node
  if (current === head) {
    head = head.next;
  } else {
    prev.next = current.next;
  }

  return head;
};
