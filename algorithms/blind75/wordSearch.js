/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

    +---+---+---+---+
    | A*| B*| C*| E |
    +---+---+---+---+
    | S | F | C*| S |
    +---+---+---+---+
    | A | D*| E*| E |
    +---+---+---+---+


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

    +---+---+---+---+
    | A | B | C | E |
    +---+---+---+---+
    | S | F | C | S*|
    +---+---+---+---+
    | A | D | E*| E*|
    +---+---+---+---+

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

    +---+---+---+---+
    | A | B | C | E |
    +---+---+---+---+
    | S | F | C | S |
    +---+---+---+---+
    | A | D | E | E |
    +---+---+---+---+

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rSize = board.length;
  const cSize = board[0].length;

  const dfs = (r, c, i) => {
    if (i === word.length) return true;

    const letter = word.charAt(i);

    if (r < 0 || r >= rSize || c < 0 || c >= cSize || letter !== board[r][c])
      return false;

    let temp = board[r][c];
    board[r][c] = "*";

    const res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = temp;

    return res;
  };

  for (let i = 0; i < rSize; i++) {
    for (let j = 0; j < cSize; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};
