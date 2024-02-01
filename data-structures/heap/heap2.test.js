const Heap = require("./Heap2");

describe("Heap", () => {
  test("should be max heap by default", () => {
    const heap = new Heap();
    heap.insert(10);
    heap.insert(1);
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);

    expect(heap.pop()).toBe(1);
    expect(heap.pop()).toBe(2);
    expect(heap.pop()).toBe(3);
    expect(heap.pop()).toBe(5);
    expect(heap.pop()).toBe(10);
  });

  test("should be min heap when we pass comparator function", () => {
    const heap = new Heap((a, b) => b - a);
    heap.insert(10);
    heap.insert(1);
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);

    expect(heap.pop()).toBe(10);
    expect(heap.pop()).toBe(5);
    expect(heap.pop()).toBe(3);
    expect(heap.pop()).toBe(2);
    expect(heap.pop()).toBe(1);
  });

  test("should work for objects as well", () => {
    const heap = new Heap((o1, o2) => o1.count - o2.count);

    heap.insert({ count: 10 });
    heap.insert({ count: 1 });
    heap.insert({ count: 5 });
    heap.insert({ count: 2 });
    heap.insert({ count: 3 });

    expect(heap.pop().count).toBe(1);
    expect(heap.pop().count).toBe(2);
    expect(heap.pop().count).toBe(3);
    expect(heap.pop().count).toBe(5);
    expect(heap.pop().count).toBe(10);
  });

  test("should heapify", () => {
    const items = [10, 1, 5, 2, 3];
    const heap = new Heap();
    heap.insertArr(items);

    expect(heap.pop()).toBe(1);
    expect(heap.pop()).toBe(2);
    expect(heap.pop()).toBe(3);
    expect(heap.pop()).toBe(5);
    expect(heap.pop()).toBe(10);
  });
});
