/*

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. 
word may contain dots '.' where dots can be matched with any letter.

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

*/

var TrieNode = function (char) {
  this.char = char
  this.children = new Map()
  this.endOfWord = false
}

var WordDictionary = function () {
  this.root = new TrieNode('*')
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this.root
  for (const ch of word) {
    if (!current.children.has(ch)) {
      current.children.set(ch, new TrieNode(ch))
    }
    current = current.children.get(ch)
  }
  current.endOfWord = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, current = this.root) {
  for (let i = 0; i < word.length; i++) {
    const ch = word[i]
    if (ch === '.') {
      let res = false
      for (const child of current.children.values()) {
        res ||= this.search(word.slice(i + 1), child)
      }
      return res
    } else if (current.children.has(ch)) {
      current = current.children.get(ch)
    } else {
      return false
    }
  }

  return current.endOfWord
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
