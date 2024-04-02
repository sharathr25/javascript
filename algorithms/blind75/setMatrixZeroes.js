/*

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:

    +---+---+---+           +---+---+---+
    | 1 | 1 | 1 |           | 1 | 0 | 1 |
    +---+---+---+           +---+---+---+
    | 1 | 0 | 1 |    ->     | 0 | 0 | 0 |
    +---+---+---+           +---+---+---+     
    | 1 | 1 | 1 |           | 1 | 0 | 1 |
    +---+---+---+           +---+---+---+

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

    +---+---+---+---+        +---+---+---+---+
    | 0 | 1 | 2 | 0 |        | 0 | 0 | 0 | 0 |
    +---+---+---+---+        +---+---+---+---+
    | 3 | 4 | 5 | 2 |   ->   | 0 | 4 | 5 | 0 |
    +---+---+---+---+        +---+---+---+---+ 
    | 1 | 3 | 1 | 5 |        | 0 | 3 | 1 | 0 |
    +---+---+---+---+        +---+---+---+---+

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowsWithZero = new Set();
  const columnsWithZero = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rowsWithZero.add(i);
        columnsWithZero.add(j);
      }
    }
  }
  rowsWithZero.forEach((row) => {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  });
  columnsWithZero.forEach((column) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][column] = 0;
    }
  });
};
