/*

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:

    +---+---+---+---+
    |*o |*a | a | n |
    +---+---+---+---+
    | e |*t-| a-| e-|
    +---+---+---+---+
    | i |*h | k | r |
    +---+---+---+---+
    | i | f | l | v |
    +---+---+---+---+

Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:

    +---+---+
    | a | b |
    +---+---+
    | c | d |
    +---+---+

Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const ROW = board.length
  const COLUMN = board[0].length

  const res = []

  const check = (node, r, c) => {
    if (node.end) {
      res.push(node.end)
      node.end = null
    }
    if (r < 0 || r >= ROW) return
    if (c < 0 || c >= COLUMN) return
    const char = board[r][c]
    if (!node[char]) return

    const temp = char
    board[r][c] = '*'
    check(node[char], r + 1, c)
    check(node[char], r - 1, c)
    check(node[char], r, c + 1)
    check(node[char], r, c - 1)
    board[r][c] = temp
  }

  const buildTrie = () => {
    const root = {}

    for (const word of words) {
      let current = root

      for (const char of word) {
        if (!current[char]) current[char] = {}
        current = current[char]
      }

      current.end = word
    }

    return root
  }

  const root = buildTrie(words)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      check(root, i, j)
    }
  }

  return res
}
