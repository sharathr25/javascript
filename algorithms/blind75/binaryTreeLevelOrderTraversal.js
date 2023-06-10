/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

         3
        / \
       9   20
           / \
          15  7

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []

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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []

  const dfs = (root, k) => {
    if (!root) return
    if (res[k]) res[k].push(root.val)
    else res[k] = [root.val]
    dfs(root.left, k + 1)
    dfs(root.right, k + 1)
  }

  dfs(root, 0)

  return res
}
