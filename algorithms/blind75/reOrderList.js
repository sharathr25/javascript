/*

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:

    1 -> 2 -> 3 -> 4
            |
            v
    1 -> 4 -> 2 -> 3

Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:

    1 -> 2 -> 3 -> 4 -> 5
              |
              v
    1 -> 5 -> 2 -> 4 -> 3

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // get total nodes
  let current = head;
  let total = 0;
  while (current) {
    total++;
    current = current.next;
  }

  // push right half of the nodes to the stack
  const stack = [];
  current = head;
  const halfOfTotal = total / 2;
  while (current) {
    total--;
    const next = current.next;
    if (total <= halfOfTotal) {
      current.next = null;
    }
    if (total < halfOfTotal) {
      stack.push(current);
    }
    current = next;
  }

  // re-order by poping stack
  current = head;
  while (stack.length) {
    const next = current.next;
    const node = stack.pop();
    current.next = node;
    node.next = next;
    current = next;
  }
};
