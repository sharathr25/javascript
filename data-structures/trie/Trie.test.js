const Trie = require("./Trie");

describe("Trie", () => {
  test("Should be able to check word existence", () => {
    const trie = new Trie();
    trie.insert("car");
    trie.insert("cat");
    expect(trie.contains("cat")).toBeTruthy();
    expect(trie.contains("dog")).toBeFalsy();
  });

  test("Should be able to get words with prefix", () => {
    const trie = new Trie();
    trie.insert("car");
    trie.insert("cat");
    trie.insert("eagle");
    expect(trie.findWords("ca")).toEqual(["car", "cat"]);
  });
});
