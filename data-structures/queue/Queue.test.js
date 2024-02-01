const Queue = require("./Queue");

describe("Queue", () => {
  test("Should work", () => {
    const queue = new Queue();
    queue.enqueue(1).enqueue(2).enqueue(3);

    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBeTruthy();
  });
});
