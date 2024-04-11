const treeSum = (root) => {
  if (!root) return 0;

  let sum = 0;
  const queue = [root];

  while (queue.length) {
    const cur = queue.shift();

    sum += cur.val;

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  return sum;
};

// const treeSum = (root) => {
//   if (!root) return 0;

//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

module.exports = { treeSum };
