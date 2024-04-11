const linkedListValues = (head) => {
  let cur = head;
  const res = [];

  while (cur !== null) {
    res.push(cur.val);
    cur = cur.next;
  }

  return res;
};

// const linkedListValues = (head) => {
//   const res = [];

//   const fun = (cur) => {
//     if (cur === null) return;
//     res.push(cur.val);
//     fun(cur.next);
//   };

//   fun(head);

//   return res;
// };

module.exports = { linkedListValues };
