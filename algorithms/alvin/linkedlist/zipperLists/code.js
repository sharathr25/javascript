// const zipperLists = (head1, head2) => {
//   let head = head1;
//   let tail = head1;
//   let cur1 = head1.next;
//   let cur2 = head2;
//   let count = 0;

//   while (cur1 !== null && cur2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = cur2;
//       cur2 = cur2.next;
//     } else {
//       tail.next = cur1;
//       cur1 = cur1.next;
//     }
//     tail = tail.next;
//     count++;
//   }

//   if (cur1 !== null) {
//     tail.next = cur1;
//   }

//   if (cur2 !== null) {
//     tail.next = cur2;
//   }

//   return head;
// };

const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);

  return head1;
};

module.exports = { zipperLists };
