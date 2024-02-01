const Trie = require("./TrieV2");

describe("Trie", () => {
  test("Should be able to search", () => {
    const trie = new Trie();
    trie.insert("car");
    trie.insert("cat");
    expect(trie.search("car")).toBeTruthy();
    expect(trie.search("ca.")).toBeTruthy();
    expect(trie.search("dog")).toBeFalsy();
  });
});
