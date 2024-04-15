const { equalPairs } = require("./code");

describe("Equal Row and Column Pairs", () => {
  test("Test Case 1", () => {
    const expected = 1;
    const actual = equalPairs([
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 3;
    const actual = equalPairs([
      [3, 1, 2, 2],
      [1, 4, 4, 5],
      [2, 4, 2, 2],
      [2, 4, 2, 2],
    ]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = 2;
    const actual = equalPairs([
      [11, 1],
      [1, 11],
    ]);
    expect(actual).toEqual(expected);
  });
});
