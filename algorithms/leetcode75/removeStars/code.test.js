const { removeStars } = require("./code");

describe("Removing Stars From a String", () => {
  test("Test Case 1", () => {
    const expected = "lecoe";
    const actual = removeStars("leet**cod*e");
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = "lecoe";
    const actual = removeStars("erase*****");
    expect(actual).toEqual(expected);
  });
});
