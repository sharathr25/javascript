const treeMin = (root) => {
  if (!root) return Infinity;

  let min = Infinity;
  const queue = [root];

  while (queue.length) {
    const cur = queue.shift();

    min = Math.min(cur.val, min);

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  return min;
};

// const treeMin = (root) => {
//   if (!root) return Infinity;

//   return Math.min(root.val, treeMin(root.left), treeMin(root.right));
// };

module.exports = { treeMin };
