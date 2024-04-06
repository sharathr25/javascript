const { maxVowels, isVowel } = require("./code");

describe("Merge Strings Alternately", () => {
  test("Test Case 1", () => {
    const expected = 3;
    const actual = maxVowels("abciiidef", 3);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 2;
    const actual = maxVowels("aeiou", 2);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = 2;
    const actual = maxVowels("leetcode", 3);
    expect(actual).toEqual(expected);
  });
  test("Helper function tests", () => {
    expect(isVowel("a")).toBeTruthy();
    expect(isVowel("e")).toBeTruthy();
    expect(isVowel("i")).toBeTruthy();
    expect(isVowel("o")).toBeTruthy();
    expect(isVowel("u")).toBeTruthy();
    expect(isVowel("b")).toBeFalsy();
  });
});
