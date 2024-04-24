const { largestAltitude } = require("./code");

describe("Find the Highest Altitude", () => {
  test("Test Case 1", () => {
    const expected = 1;
    const actual = largestAltitude([-5, 1, 5, 0, -7]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = 0;
    const actual = largestAltitude([-4, -3, -2, -1, 4, 3, 2]);
    expect(actual).toEqual(expected);
  });
});
