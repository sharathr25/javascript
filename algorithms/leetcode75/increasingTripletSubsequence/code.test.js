const { increasingTriplet } = require("./code");

describe("Increasing Triplet Subsequence", () => {
  test("Test Case 1", () => {
    const expected = true;
    const actual = increasingTriplet([1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = false;
    const actual = increasingTriplet([5, 4, 3, 2, 1]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = true;
    const actual = increasingTriplet([9, 10, 5, 11, 10, 9, 8]);
    expect(actual).toEqual(expected);
  });
});
