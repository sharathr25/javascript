const HashTable = require("./HashTable");

describe("HashTable", () => {
  test("Should get keys", () => {
    const hashTable = new HashTable();
    hashTable.set("a", 1);
    hashTable.set("b", 2);
    hashTable.set("c", 3);
    expect(hashTable.getKeys()).toEqual(["a", "b", "c"]);
  });

  test("Should get values", () => {
    const hashTable = new HashTable();
    hashTable.set("a", 1);
    hashTable.set("b", 2);
    hashTable.set("c", 3);
    expect(hashTable.getValues()).toEqual([1, 2, 3]);
  });

  test("Should set data", () => {
    const hashTable = new HashTable();
    hashTable.set("a", 1);
    hashTable.set("b", 2);
    hashTable.set("c", 3);
    expect(hashTable.getKeys()).toHaveLength(3);
  });

  test("Should delete data", () => {
    const hashTable = new HashTable();
    hashTable.set("a", 1);
    hashTable.set("b", 2);
    hashTable.set("c", 3);
    hashTable.delete("b");
    expect(hashTable.getKeys()).toHaveLength(2);
  });

  test("Should check existence of data", () => {
    const hashTable = new HashTable();
    hashTable.set("a", 1);
    hashTable.set("b", 2);
    hashTable.set("c", 3);
    expect(hashTable.has("b")).toBeTruthy();
  });
});
