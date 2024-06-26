const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;

  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

module.exports = { maxPathSum };
