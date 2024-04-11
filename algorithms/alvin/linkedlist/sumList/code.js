// const sumList = (head) => {
//   let cur = head;
//   let sum = 0;

//   while (cur !== null) {
//     sum += cur.val;
//     cur = cur.next;
//   }

//   return sum;
// };

const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

module.exports = { sumList };
