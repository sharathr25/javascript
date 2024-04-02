/*

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:

            root                    
             3
            / \                  subRoot
           4   5                   4
          / \                     / \
         1   2                   1   2

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Example 2:

            root                    
             3
            / \                  subRoot
           4   5                   4
          / \                     / \
         1   2                   1   2
            /
           0

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
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
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (root.val === subRoot.val) {
    const temp = root;
    if (isSame(temp, subRoot)) return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var isSame = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (root1 && !root2) return false;
  if (!root1 && root2) return false;
  if (root1.val !== root2.val) return false;

  return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
};
