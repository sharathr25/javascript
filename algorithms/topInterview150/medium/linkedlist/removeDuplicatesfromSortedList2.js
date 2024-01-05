/**
Given the head of a sorted linked list, 
delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list. 
Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 ==> 1 -> 2 -> 5
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
1 -> 1 -> 1 -> 2 -> 3 ==> 2 -> 3
Output: [2,3]

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
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // Example head: [1,2,3,3,4,4,5]
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  // dummyNode -> [0,1,2,3,3,4,4,5]
  // which now gives us a starting node to update once
  // we've found and removed duplicate
  // we assign dummyNode to list
  let list = dummyNode;

  // Start list = [0,1,2,3,3,4,4,5]
  // We want to continously check the next and the next.next node
  // AKA nodes 1 -> 2 above in list
  // The while loop below will reach the else statement until
  // we reach the  3 -> 3 nodes
  while (list.next && list.next.next) {
    if (list.next.val === list.next.next.val) {
      // [1,2,3,3,4,4,5]
      //      ^ ^
      // Now that we've found our first duplicate,
      // it turns into a sub loop to remove not just one,
      // but all dupes, referring to 2nd Ex: [1,1,1,2,3]
      while (
        list.next &&
        list.next.next &&
        list.next.val === list.next.next.val
      ) {
        // [1,2,3,3,4,4,5]
        //        ^ ^
        list.next = list.next.next;
        // Next, which is the 2nd node 3 gets updated to 4.
        // We then wold loop again in the while loop
        // which will be false, moving on to the next line below
      }
      // Now we remove the first 3 since it's part of the dupes
      // list is 1 below, so list.next is 2
      // [1,2,3,4,4,5] -> [1,2,4,4,5]
      //  | ^   ^
      list.next = list.next.next;
    } else {
      // If not a dupe we update current with next.
      list = list.next;
    }
  }
  return dummyNode.next;
};

// ====== using Set ======
// var deleteDuplicates = function (head) {
//   const duplicates = new Set();
//   const visited = new Set();

//   let cur = head;
//   while (cur) {
//     if (visited.has(cur.val)) duplicates.add(cur.val);
//     else visited.add(cur.val);
//     cur = cur.next;
//   }

//   prev = null;
//   cur = head;
//   while (cur) {
//     if (duplicates.has(cur.val)) {
//       if (!prev) head = cur.next;
//       else prev.next = cur.next;
//     } else {
//       prev = cur;
//     }
//     cur = cur.next;
//   }

//   return head;
// };
