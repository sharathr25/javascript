const { kidsWithCandies } = require("./code");

describe("Kids With the Greatest Number of Candies", () => {
  test("Test Case 1", () => {
    const expected = [true, true, true, false, true];
    const actual = kidsWithCandies([2, 3, 5, 1, 3], 3);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = [true, false, false, false, false];
    const actual = kidsWithCandies([4, 2, 1, 1, 2], 1);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = [true, false, true];
    const actual = kidsWithCandies([12, 1, 12], 10);
    expect(actual).toEqual(expected);
  });
});
