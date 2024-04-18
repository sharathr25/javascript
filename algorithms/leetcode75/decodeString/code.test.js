const { decodeString } = require("./code");

describe("Determine if Two Strings Are Close", () => {
  test("Test Case 1", () => {
    const expected = "aaabcbc";
    const actual = decodeString("3[a]2[bc]");
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = "accaccacc";
    const actual = decodeString("3[a2[c]]");
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = "abcabccdcdcdef";
    const actual = decodeString("2[abc]3[cd]ef");
    expect(actual).toEqual(expected);
  });
  test("Test Case 4", () => {
    const expected = "abccdcdcdxyz";
    const actual = decodeString("abc3[cd]xyz");
    expect(actual).toEqual(expected);
  });
});
