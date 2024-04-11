const { isSubsequence } = require("./code");

describe("Is Subsequence?", () => {
  test("Test Case 1", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
  });
  test("Test Case 2", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
  });
});
