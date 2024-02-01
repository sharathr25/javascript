class Trie {
  constructor() {
    this.root = {};
  }

  /**
   *
   * @param {string} word
   */
  insert(word) {
    let current = this.root;
    for (const ch of word) {
      if (!current[ch]) current[ch] = {};
      current = current[ch];
    }
    current.isEndOfWord = true;
  }

  /**
   *
   * @param {string} word
   * @param {object|undefined} parent
   * @returns {boolean}
   */
  search(word, parent) {
    let current = parent || this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (ch === ".") {
        return Object.values(current).some((cur) =>
          this.search(word.slice(i + 1), cur)
        );
      } else if (!current[ch]) {
        return false;
      } else {
        current = current[ch];
      }
    }
    return current.isEndOfWord;
  }
}

module.exports = Trie;
