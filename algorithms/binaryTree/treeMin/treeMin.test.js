const { Node } = require("../Node");
const { treeMin } = require("./treeMin");

describe("Tree Includes", () => {
  const a = new Node(5);
  const b = new Node(11);
  const c = new Node(3);
  const d = new Node(4);
  const e = new Node(15);
  const f = new Node(12);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  /*
           5
          / \
        11    3 
      /    \    \
     4      15   12 
    
    */

  test("test_00", () => {
    expect(treeMin(a)).toEqual(3);
  });

  test("test_01", () => {
    expect(treeMin(null)).toEqual(Infinity);
  });
});
