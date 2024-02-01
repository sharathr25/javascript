const BinarySearchTree = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
  const binaryTree = new BinarySearchTree();
  binaryTree.insert(7).insert(4).insert(9).insert(1).insert(10);

  test("Should be able to search", () => {
    expect(binaryTree.contains(10)).toBeTruthy();
  });

  test("Should get in pre order", () => {
    expect(binaryTree.preOrder()).toEqual([7, 4, 1, 9, 10]);
  });

  test("Should get in in order", () => {
    expect(binaryTree.inOrder()).toEqual([1, 4, 7, 9, 10]);
  });

  test("Should get in post order", () => {
    expect(binaryTree.postOrder()).toEqual([1, 4, 10, 9, 7]);
  });
});
