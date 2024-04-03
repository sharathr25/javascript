const { greatestCommonDivisorOfStrings } = require("./code");

describe("Greatest Common Divisor of Strings", () => {
  test("Test Case 1", () => {
    const expected = "ABC";
    const actual = greatestCommonDivisorOfStrings("ABCABC", "ABC");
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = "ABAB";
    const actual = greatestCommonDivisorOfStrings("ABABABAB", "ABAB");
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = "";
    const actual = greatestCommonDivisorOfStrings("LEET", "CODE");
    expect(actual).toEqual(expected);
  });
});
