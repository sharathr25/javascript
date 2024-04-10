const { Node } = require("../Node");
const { maxPathSum } = require("./maxPathSum");

describe("Tree Includes", () => {
  const a = new Node(5);
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
           5
          / \
        11    3 
      /    \    \
     4      2    1 
    
    */

  test("test_00", () => {
    expect(maxPathSum(a)).toEqual(20);
  });

  test("test_01", () => {
    expect(maxPathSum(null)).toEqual(-Infinity);
  });
});
