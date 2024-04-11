const { Node } = require("../Node");
const { treeIncludes } = require("./treeIncludes");

describe("Tree Includes", () => {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  /*
            a
           / \
         b     c 
      /    \     \
     d      e     f  
    
    */

  test("test_00", () => {
    expect(treeIncludes(a, "e")).toBeTruthy();
  });

  test("test_01", () => {
    expect(treeIncludes(a, "x")).toBeFalsy();
  });

  test("test_02", () => {
    expect(treeIncludes(null, "b")).toBeFalsy();
  });
});
