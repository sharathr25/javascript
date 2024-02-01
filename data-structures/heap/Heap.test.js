const Heap = require("./Heap");

describe("Heap", () => {
  test("should be max heap by default", () => {
    const heap = new Heap();
    heap.insert(10);
    heap.insert(1);
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);

    expect(heap.remove()).toBe(10);
    expect(heap.remove()).toBe(5);
    expect(heap.remove()).toBe(3);
    expect(heap.remove()).toBe(2);
    expect(heap.remove()).toBe(1);
  });

  test("should be min heap when we pass comparator function", () => {
    const heap = new Heap((a, b) => b - a);
    heap.insert(10);
    heap.insert(1);
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);

    expect(heap.remove()).toBe(1);
    expect(heap.remove()).toBe(2);
    expect(heap.remove()).toBe(3);
    expect(heap.remove()).toBe(5);
    expect(heap.remove()).toBe(10);
  });

  test("should work for objects as well", () => {
    const heap = new Heap((o1, o2) => o1.count - o2.count);

    heap.insert({ count: 10 });
    heap.insert({ count: 1 });
    heap.insert({ count: 5 });
    heap.insert({ count: 2 });
    heap.insert({ count: 3 });

    expect(heap.remove().count).toBe(10);
    expect(heap.remove().count).toBe(5);
    expect(heap.remove().count).toBe(3);
    expect(heap.remove().count).toBe(2);
    expect(heap.remove().count).toBe(1);
  });
});
