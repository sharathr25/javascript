const breadthFirstValues = (root) => {
  if (!root) return [];

  const queue = [root];
  const vals = [];

  while (queue.length) {
    const cur = queue.shift();
    vals.push(cur.val);

    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }

  return vals;
};

module.exports = { breadthFirstValues };
