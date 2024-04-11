const { Node } = require("../Node");
const { linkedListValues } = require("../linkedListValues/code");
const { reverseList } = require("./code");

describe("Linked List Values", () => {
  test("Test Case 1", () => {
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    const d = new Node("D");

    a.next = b;
    b.next = c;
    c.next = d;

    expect(linkedListValues(reverseList(a))).toEqual(["D", "C", "B", "A"]);
  });
});
