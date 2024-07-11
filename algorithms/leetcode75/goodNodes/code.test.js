const BinaryTreeNode = require("../../../data-structures/BinaryTreeNode");
const { goodNodes } = require("./code");

describe("Count Good Nodes in Binary Tree", () => {
  test("Test Case 1", () => {
    expect(goodNodes(new BinaryTreeNode(1))).toEqual(1);
  });
});
