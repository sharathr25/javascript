const getAtIndex = (head, index) => {
  let cur = head;

  while (cur !== null) {
    if (index === 0) return cur.val;
    index--;
    cur = cur.next;
  }

  return null;
};

// const getAtIndex = (head, index) => {
//   if (head === null) return null;
//   if (index === 0) return head.val;
//   return getAtIndex(head.next, index - 1);
// };

module.exports = { getAtIndex };
