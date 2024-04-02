/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:

         1            1
        /  \         /  \
       2    3       2    3

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:

         1            1
        /              \
       2                2

Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:

         1            1
        /  \         /  \
       2    1       1    2

Input: p = [1,2,1], q = [1,1,2]
Output: false

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const _dfs = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (root1 && !root2) return false;
    if (!root1 && root2) return false;
    if (root1.val !== root2.val) return false;
    return _dfs(root1.left, root2.left) && _dfs(root1.right, root2.right);
  };

  return _dfs(p, q);
};
