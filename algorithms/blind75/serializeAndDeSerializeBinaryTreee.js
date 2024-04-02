/*

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, 
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. 
There is no restriction on how your serialization/deserialization algorithm should work. 
You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 

Example 1:

        1
       / \
      2   3
         / \
        4   5

Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const arr = [];
  const dfs = (root, i) => {
    if (!root) {
      arr.push("*");
      return;
    }
    arr.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);

  return arr.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = data.split(",");
  let i = 0;

  const dfs = () => {
    if (arr[i] === "*") {
      i++;
      return null;
    }
    const newNode = new TreeNode(parseInt(arr[i++]));
    newNode.left = dfs();
    newNode.right = dfs();

    return newNode;
  };

  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
