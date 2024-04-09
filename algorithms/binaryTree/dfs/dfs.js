/**
 * Write a function, depthFirstValues, that takes in the root of a binary tree.
 * The function should return an array containing all values of the tree in depth-first order
 */

// iterative version
// const depthFirstValues = (root) => {
//   if(!root) return [];
//
//   const stack = [root];
//   const vals = [];

//   while (stack.length) {
//     const cur = stack.pop();
//     vals.push(cur.val);

//     if (cur.right) stack.push(cur.right);
//     if (cur.left) stack.push(cur.left);
//   }

//   return vals;
// };

// recursive version
const depthFirstValues = (root) => {
  if (!root) return [];

  const leftVals = depthFirstValues(root.left);
  const rightVals = depthFirstValues(root.right);

  return [root.val, ...leftVals, ...rightVals];
};

module.exports = { depthFirstValues };
