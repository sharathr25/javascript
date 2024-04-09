// const treeIncludes = (root, target) => {
//   if(!root) return false;

//   const queue = [root];

//   while (queue.length) {
//     const cur = queue.shift();

//     if (cur.val === target) return true;

//     if (cur.left) queue.push(cur.left);
//     if (cur.right) queue.push(cur.right);
//   }

//   return false;
// };

const treeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;

  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

module.exports = { treeIncludes };
