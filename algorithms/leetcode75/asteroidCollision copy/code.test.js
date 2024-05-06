const { RecentCounter } = require("./code");

describe("Number of Recent Calls", () => {
  test("Test Case 1", () => {
    const recentCounter = new RecentCounter();
    expect(recentCounter.ping(1)).toEqual(1);
    expect(recentCounter.ping(100)).toEqual(2);
    expect(recentCounter.ping(3001)).toEqual(3);
    expect(recentCounter.ping(3002)).toEqual(3);
  });
});
