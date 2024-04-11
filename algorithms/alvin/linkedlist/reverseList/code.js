const reverseList = (head) => {
  let prev = null;
  let cur = head;

  while (cur !== null) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// const reverseList = (head, prev = null) => {
//   if (head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   prev = null;
//   return reverseList(next, head);
// };

module.exports = { reverseList };
