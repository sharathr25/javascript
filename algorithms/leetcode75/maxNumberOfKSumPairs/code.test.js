const { maxOperations } = require("./code");

describe("Increasing Triplet Subsequence", () => {
  test("Test Case 1", () => {
    const expected = 2;
    const actual = maxOperations([1, 2, 3, 4, 5], 5);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 1;
    const actual = maxOperations([3, 1, 3, 4, 3], 6);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = 4;
    const actual = maxOperations(
      [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
      3
    );
    expect(actual).toEqual(expected);
  });
});
