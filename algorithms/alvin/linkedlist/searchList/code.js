const searchList = (head, target) => {
  let cur = head;

  while (cur !== null) {
    if (cur.val === target) return true;
    cur = cur.next;
  }

  return false;
};

// const searchList = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return searchList(head.next, target);
// };

module.exports = { searchList };
