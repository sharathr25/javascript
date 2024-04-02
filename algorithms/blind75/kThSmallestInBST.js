/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:

     3
    / \
   1   4
    \ 
     2

Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:

                 5
                / \
               3   6
              / \
             2   4
            /
           1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  let count = 0;
  let min = 0;

  const _kthSmallest = (root, k) => {
    if (!root) return;
    if (count > k) return;
    _kthSmallest(root.left, k);
    if (++count === k) min = root.val;
    _kthSmallest(root.right, k);
  };

  _kthSmallest(root, k);

  return min;
};
