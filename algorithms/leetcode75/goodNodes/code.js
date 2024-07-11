const BinaryTreeNode = require("../../../data-structures/BinaryTreeNode");

/**
 * @param {BinaryTreeNode} root
 * @return {number}
 */
const goodNodes = (root) => {
  let count = 0;
  const dfs = (root, max) => {
    if (!root) return null;
    if (root.value >= max) count++;
    const curMax = Math.max(root.val, max);
    dfs(root.left, curMax);
    dfs(root.right, curMax);
  };
  dfs(root, -Infinity);
  return count;
};

module.exports = { goodNodes };
