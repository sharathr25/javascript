const { Node } = require("../Node");
const { getAtIndex } = require("./code");

describe("Sum List", () => {
  test("Test Case 1", () => {
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    const d = new Node("D");

    a.next = b;
    b.next = c;
    c.next = d;

    expect(getAtIndex(a, 2)).toEqual("C");
  });

  test("Test Case 2", () => {
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    const d = new Node("D");

    a.next = b;
    b.next = c;
    c.next = d;

    expect(getAtIndex(a, 5)).toEqual(null);
  });
});
