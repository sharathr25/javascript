const { mergeAlternately } = require("./mergeStringsAlternately");

describe("Merge Strings Alternately", () => {
  test("Test Case 1", () => {
    const expected = "apbqcr";
    const actual = mergeAlternately("abc", "pqr");
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = "apbqrs";
    const actual = mergeAlternately("ab", "pqrs");
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = "apbqcd";
    const actual = mergeAlternately("abcd", "pq");
    expect(actual).toEqual(expected);
  });
});
