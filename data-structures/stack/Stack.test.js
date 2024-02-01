const Stack = require("./Stack");

describe("Stack", () => {
  test("Should work", () => {
    const stack = new Stack();
    stack.push(1).push(2).push(3);

    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBeTruthy();
  });
});
