const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  test("Should prepend", () => {
    const linkedList = new LinkedList();
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);

    expect(linkedList.toString()).toEqual("3,2,1");
  });

  test("Should append", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.toString()).toEqual("1,2,3");
  });

  test("Should insert at an index", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.insert(4, 1);

    expect(linkedList.toString()).toEqual("1,4,2,3");
  });

  test("Should delete head", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.deleteHead();

    expect(linkedList.toString()).toEqual("2,3");
  });

  test("Should delete tail", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.deleteTail();

    expect(linkedList.toString()).toEqual("1,2");
  });

  test("Should delete data passed", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.delete(2);

    expect(linkedList.toString()).toEqual("1,3");
  });

  test("Should find data", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.find(2)).not.toBe(null);
  });

  test("Should reverse", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.reverse();

    expect(linkedList.toString()).toEqual("3,2,1");
  });
});
