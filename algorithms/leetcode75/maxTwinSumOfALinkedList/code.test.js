const LinkedList = require("../../../data-structures/linkedList/LinkedList");
const { pairSum } = require("./code");

describe("Maximum Twin Sum of a Linked List", () => {
  test("Test case 1", () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([5, 4, 2, 1]);

    const expected = 6;
    const actual = pairSum(linkedList.head);

    expect(actual).toBe(expected);
  });
  test("Test case 2", () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([4, 2, 2, 3]);

    const expected = 7;
    const actual = pairSum(linkedList.head);

    expect(actual).toBe(expected);
  });

  test("Test case 3", () => {
    const linkedList = new LinkedList();
    linkedList.fromArray([1, 10000]);

    const expected = 10001;
    const actual = pairSum(linkedList.head);

    expect(actual).toBe(expected);
  });
});
