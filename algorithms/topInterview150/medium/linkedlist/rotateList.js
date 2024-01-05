/**
Given the head of a linked list, rotate the list to the right by k places.
Example 1:
Input: head = [1,2,3,4,5], k = 2
          1 -> 2 -> 3 -> 4 -> 5
rotate 1: 5 -> 1 -> 2 -> 3 -> 4
rotate 2: 4 -> 5 -> 1 -> 2 -> 3
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
          0 -> 1 -> 2
rotate 1: 2 -> 0 -> 1
rotate 2: 1 -> 2 -> 0
rotate 3: 0 -> 1 -> 2
rotate 4: 2 -> 0 -> 1
Output: [2,0,1]
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
