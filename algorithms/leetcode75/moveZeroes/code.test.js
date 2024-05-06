const { moveZeroes } = require("./code");

describe("Move Zeroes", () => {
  test("Test Case 1", () => {
    const expected = [1, 3, 12, 0, 0];
    const actual = [0, 1, 0, 3, 12];
    moveZeroes(actual);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = [0];
    const actual = [0];
    moveZeroes(actual);
    expect(actual).toEqual(expected);
  });
});
