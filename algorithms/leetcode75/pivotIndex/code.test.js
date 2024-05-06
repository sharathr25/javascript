const { pivotIndex } = require("./code");

describe("Find Pivot Index", () => {
  test("Test Case 1", () => {
    const expected = 3;
    const actual = pivotIndex([1, 7, 3, 6, 5, 6]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = -1;
    const actual = pivotIndex([1, 2, 3]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = 0;
    const actual = pivotIndex([2, 1, -1]);
    expect(actual).toEqual(expected);
  });
});
