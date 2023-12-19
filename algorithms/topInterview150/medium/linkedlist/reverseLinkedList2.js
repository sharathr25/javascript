/**
Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
1 -> 2 -> 3 -> 4 -> 5 => 1 -> 4 -> 3 -> 2 -> 5
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

 */

class ListNode {
  /**
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverse = function (start, end) {
  let cur = start;
  let prev = null;

  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    if (cur == end) break;
    else cur = next;
  }

  return [prev, start];
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let count = 0;
  let cur = head;
  let prevLeft = null;
  let nextRight = null;
  let prev = null;
  let leftNode = null;
  let rightNode = null;

  while (cur) {
    count++;
    if (count == left) {
      prevLeft = prev;
      leftNode = cur;
    }
    if (count == right) {
      nextRight = cur.next;
      rightNode = cur;
      break;
    }
    prev = cur;
    cur = cur.next;
  }

  const [start, end] = reverse(leftNode, rightNode);

  if (end) {
    end.next = nextRight;
  }

  if (prevLeft) {
    prevLeft.next = start;
    return head;
  }

  return start;
};

class List {
  constructor() {
    this.head = null;
  }

  /**
   * @param {number} val
   */
  prepend(val) {
    const node = new ListNode(val);
    if (this.head) {
      let cur = this.head;
      let prev = cur;
      while (cur) {
        prev = cur;
        cur = cur.next;
      }
      prev.next = node;
    } else {
      this.head = node;
    }
  }

  /**
   * @param {number} left
   * @param {number} right
   */
  reverseBetween(left, right) {
    this.head = reverseBetween(this.head, left, right);
  }

  /**
   * @param {ListNode} head
   */
  print() {
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }

    console.log(arr.join("->"));
  }
}

const list = new List();
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list.prepend(5);
list.print();
list.reverseBetween(3, 4);
list.print();
