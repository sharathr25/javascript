/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leafs1 = [];
  const leafs2 = [];

  const dfs = function (root, arr) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      arr.push(root.val);
      return;
    }
    dfs(root.left, arr);
    dfs(root.right, arr);
  };

  dfs(root1, leafs1);
  dfs(root2, leafs2);

  return (
    leafs1.length === leafs2.length && leafs1.every((e, i) => e === leafs2[i])
  );
};

module.exports = { leafSimilar };
