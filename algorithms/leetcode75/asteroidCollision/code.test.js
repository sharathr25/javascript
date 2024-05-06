const { asteroidCollision } = require("./code");

describe("Asteroid Collision", () => {
  test("Test Case 1", () => {
    const expected = [5, 10];
    const actual = asteroidCollision([5, 10, -5]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 2", () => {
    const expected = [];
    const actual = asteroidCollision([8, -8]);
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = [-2, -2];
    const actual = asteroidCollision([-2, 1, 1, -2]);
    expect(actual).toEqual(expected);
  });
});
