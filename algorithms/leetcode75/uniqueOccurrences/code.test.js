const { uniqueOccurrences } = require("./code");

describe("Is Subsequence?", () => {
  test("Test Case 1", () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBeTruthy();
  });
  test("Test Case 2", () => {
    expect(uniqueOccurrences([1, 2])).toBeFalsy();
  });
  test("Test Case 3", () => {
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBeTruthy();
  });
});
