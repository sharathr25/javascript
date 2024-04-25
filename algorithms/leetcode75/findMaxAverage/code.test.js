const { findMaxAverage } = require("./code");

describe("Maximum Average Subarray I", () => {
  test("Test Case 1", () => {
    const expected = 12.75;
    const actual = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 2;
    const actual = findMaxAverage([0, 1, 1, 3, 3], 4);
    expect(actual).toEqual(expected);
  });
});
