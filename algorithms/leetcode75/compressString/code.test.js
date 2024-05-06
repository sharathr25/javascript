const { compress } = require("./code");

describe("String Compression", () => {
  test("Test Case 1", () => {
    const arr = ["a", "a", "b", "b", "c", "c", "c"];
    const expected = 6;
    const expectedArr = ["a", "2", "b", "2", "c", "3"];
    const actual = compress(arr);
    expect(actual).toEqual(expected);
    for (let i = 0; i < expected; i++) {
      expect(arr[i]).toEqual(expectedArr[i]);
    }
  });
  test("Test Case 2", () => {
    const arr = ["a"];
    const expected = 1;
    const expectedArr = ["a"];
    const actual = compress(arr);
    expect(actual).toEqual(expected);
    for (let i = 0; i < expected; i++) {
      expect(arr[i]).toEqual(expectedArr[i]);
    }
  });
  test("Test Case 3", () => {
    const arr = [
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
    ];
    const expected = 4;
    const expectedArr = ["a", "b", "1", "2"];
    const actual = compress(arr);
    expect(actual).toEqual(expected);
    for (let i = 0; i < expected; i++) {
      expect(arr[i]).toEqual(expectedArr[i]);
    }
  });
});
