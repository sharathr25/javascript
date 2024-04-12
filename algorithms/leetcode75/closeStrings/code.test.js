const { closeStrings } = require("./code");

describe("Determine if Two Strings Are Close", () => {
  test("Test Case 1", () => {
    expect(closeStrings("abc", "bca")).toBeTruthy();
  });
  test("Test Case 2", () => {
    expect(closeStrings("a", "aa")).toBeFalsy();
  });
  test("Test Case 3", () => {
    expect(closeStrings("cabbba", "abbccc")).toBeTruthy();
  });
  test("Test Case 4", () => {
    expect(closeStrings("abbbzcf", "babzzcz")).toBeFalsy();
  });
  test("Test Case 5", () => {
    expect(closeStrings("cabbba", "aabbss")).toBeFalsy();
  });
  test("Test Case 6", () => {
    expect(
      closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff")
    ).toBeFalsy();
  });
});
