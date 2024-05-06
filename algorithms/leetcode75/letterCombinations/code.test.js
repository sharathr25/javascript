const { letterCombinations } = require("./code");

describe("Letter Combinations of a Phone Number", () => {
  test("Test Case 1", () => {
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const actual = letterCombinations("23");
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = [];
    const actual = letterCombinations("");
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = ["a", "b", "c"];
    const actual = letterCombinations("2");
    expect(actual).toEqual(expected);
  });
});
