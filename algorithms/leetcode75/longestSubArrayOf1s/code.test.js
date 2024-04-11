const { longestSubarray } = require("./code");

describe("Longest Subarray of 1's After Deleting One Element", () => {
  test("Test Case 1", () => {
    const expected = 3;
    const actual = longestSubarray([1, 1, 0, 1]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 5;
    const actual = longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = 2;
    const actual = longestSubarray([1, 1, 1]);
    expect(actual).toEqual(expected);
  });
});
