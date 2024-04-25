const { findDifference } = require("./code");

describe("Find the Difference of Two Arrays", () => {
  test("Test Case 1", () => {
    const expected = [
      [1, 3],
      [4, 6],
    ];
    const actual = findDifference([1, 2, 3], [2, 4, 6]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = [[3], []];
    const actual = findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
    expect(actual).toEqual(expected);
  });
});
