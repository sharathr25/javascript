const { Node } = require("../Node");
const { linkedListValues } = require("../linkedListValues/code");
const { zipperLists } = require("./code");

describe("Linked List Values", () => {
  test("Test Case 1", () => {
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    a.next = b;
    b.next = c;

    const p = new Node("P");
    const q = new Node("Q");
    const r = new Node("R");
    p.next = q;
    q.next = r;

    expect(linkedListValues(zipperLists(a, p))).toEqual([
      "A",
      "P",
      "B",
      "Q",
      "C",
      "R",
    ]);
  });

  test("Test Case 2", () => {
    const a = new Node("A");
    const b = new Node("B");
    const c = new Node("C");
    a.next = b;
    b.next = c;

    const p = new Node("P");
    const q = new Node("Q");
    p.next = q;

    expect(linkedListValues(zipperLists(a, p))).toEqual([
      "A",
      "P",
      "B",
      "Q",
      "C",
    ]);
  });

  test("Test Case 3", () => {
    const a = new Node("A");
    const b = new Node("B");
    a.next = b;

    const p = new Node("P");
    const q = new Node("Q");
    const r = new Node("R");
    p.next = q;
    q.next = r;

    expect(linkedListValues(zipperLists(a, p))).toEqual([
      "A",
      "P",
      "B",
      "Q",
      "R",
    ]);
  });
});
