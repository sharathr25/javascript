const DoublyLinkedList = require("./DoublyLinkedList");

describe("LinkedList", () => {
  test("Should prepend", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);

    expect(doublyLinkedList.toString()).toEqual("3,2,1");
  });

  test("Should append", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);

    expect(doublyLinkedList.toString()).toEqual("1,2,3");
  });

  test("Should delete head", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.deleteHead();

    expect(doublyLinkedList.toString()).toEqual("2,3");
  });

  test("Should delete tail", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.deleteTail();

    expect(doublyLinkedList.toString()).toEqual("1,2");
  });

  test("Should delete data passed", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.delete(2);

    expect(doublyLinkedList.toString()).toEqual("1,3");
  });

  test("Should find data", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);

    expect(doublyLinkedList.find(2)).not.toBe(null);
  });

  test("Should reverse", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);
    doublyLinkedList.reverse();

    expect(doublyLinkedList.toString()).toEqual("3,2,1");
  });
});
