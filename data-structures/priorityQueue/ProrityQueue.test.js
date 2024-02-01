const ProrityQueue = require("./PriorityQueue");

describe("ProrityQueue", () => {
  test("should work", () => {
    const queue = new ProrityQueue((a, b) => {
      if (a.count === b.count) return 0;
      return a.count < b.count ? -1 : 1;
    });

    queue.enqueue({ name: "process 1", count: 5 });
    queue.enqueue({ name: "process 2", count: 1 });
    queue.enqueue({ name: "process 3", count: 4 });
    queue.enqueue({ name: "process 4", count: 2 });

    expect(queue.dequeue().name).toEqual("process 1");
    expect(queue.dequeue().name).toEqual("process 3");
    expect(queue.dequeue().name).toEqual("process 4");
    expect(queue.dequeue().name).toEqual("process 2");
  });
});
