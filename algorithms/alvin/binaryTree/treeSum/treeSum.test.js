const { Node } = require("../Node");
const { treeSum } = require("./treeSum");

describe("Tree Includes", () => {
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  /*
           3
          / \
        11    4 
      /    \    \
     4      2    1 
    
    */

  test("test_00", () => {
    expect(treeSum(a)).toEqual(24);
  });

  test("test_01", () => {
    expect(treeSum(null)).toEqual(0);
  });
});
