const { Node } = require("../Node");
const { sumList } = require("./code");

describe("Sum List", () => {
  test("Test Case 1", () => {
    const a = new Node(2);
    const b = new Node(8);
    const c = new Node(3);
    const d = new Node(7);

    a.next = b;
    b.next = c;
    c.next = d;

    expect(sumList(a)).toEqual(20);
  });
});
