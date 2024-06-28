const { deleteMiddle, ListNode } = require("./code");

describe("Delete the Middle Node of a Linked", () => {
  test("Test Case 1", () => {
    const expected = [1, 3, 4, 1, 2, 6];
    const actual = getArrFromList(
      deleteMiddle(getListFromArr([1, 3, 4, 7, 1, 2, 6]))
    );
    expect(actual).toEqual(expected);
  });

  test("Test Case 2", () => {
    const expected = [1, 2, 4];
    const actual = getArrFromList(deleteMiddle(getListFromArr([1, 2, 3, 4])));
    expect(actual).toEqual(expected);
  });

  test("Test Case 3", () => {
    const expected = [2];
    const actual = getArrFromList(deleteMiddle(getListFromArr([2, 1])));
    expect(actual).toEqual(expected);
  });

  const getArrFromList = (head) => {
    const arr = [];
    let cur = head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    return arr;
  };

  const getListFromArr = (arr) => {
    let head = null;
    let cur = null;
    for (const n of arr) {
      const node = new ListNode(n);
      if (!head) {
        head = node;
      } else {
        cur.next = node;
      }
      cur = node;
    }
    return head;
  };
});
