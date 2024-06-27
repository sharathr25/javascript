const LinkedListNode = require("../../../data-structures/linkedList/LinkedListNode");

/**
 * @param {LinkedListNode} head
 * @return {number}
 */
const pairSum = function (head) {
  let fast = head;
  let slow = head;
  let arr = [];

  while (fast) {
    arr.push(slow.value);
    fast = fast.next.next;
    slow = slow.next;
  }

  let cur = slow;
  let max = -Infinity;

  while (cur) {
    max = Math.max(cur.value + arr.pop(), max);
    cur = cur.next;
  }

  return max;
};

module.exports = { pairSum };
