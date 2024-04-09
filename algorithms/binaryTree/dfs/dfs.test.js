const { Node } = require("../Node");
const { depthFirstValues } = require("./dfs");

describe("Depth First Values", () => {
  test("test_00", () => {
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

    expect(depthFirstValues(a)).toEqual(["a", "b", "d", "e", "c", "f"]);
  });

  test("test_01", () => {
    expect(depthFirstValues(null)).toEqual([]);
  });
});
