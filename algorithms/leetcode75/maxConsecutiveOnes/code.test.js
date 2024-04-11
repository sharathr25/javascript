const { longestOnes } = require("./code");

describe("Max Consecutive Ones III", () => {
  test("Test Case 1", () => {
    const expected = 6;
    const actual = longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 10;
    const actual = longestOnes(
      [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      3
    );
    expect(actual).toEqual(expected);
  });
});
