const { predictPartyVictory } = require("./code");

describe("Dota 2 Senate", () => {
  test("Test Case 1", () => {
    const expected = "Radiant";
    const actual = predictPartyVictory("RD");
    expect(actual).toEqual(expected);
  });
  test("Test Case 3", () => {
    const expected = "Dire";
    const actual = predictPartyVictory("DDRRR");
    expect(actual).toEqual(expected);
  });
});
