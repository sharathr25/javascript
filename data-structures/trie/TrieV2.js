class Trie {
  constructor () {
    this.root = {}
  }

  add (word) {
    let current = this.root
    for (const ch of word) {
      if (!current[ch]) current[ch] = {}
      current = current[ch]
    }
    current.isEndOfWord = true
  }

  search (word, parent) {
    let current = parent || this.root
    for (let i = 0; i < word.length; i++) {
      const ch = word[i]
      if (ch === '.') {
        return Object.values(current).some(cur =>
          this.search(word.slice(i + 1), cur)
        )
      } else if (!current[ch]) {
        return false
      } else {
        current = current[ch]
      }
    }
    return current.isEndOfWord
  }
}

const trie = new Trie()

trie.add('cat')
trie.add('car')
trie.add('bat')
console.log(trie.search('car'))
console.log(trie.search('cart'))
console.log(trie.search('.ar'))
console.log(trie)
