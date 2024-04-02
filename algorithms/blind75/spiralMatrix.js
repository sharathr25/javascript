/*

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

    +---+---+---+
    | 1 > 2 > 3 |
    +---+---+-v-+
    | 4 > 5 | 6 |
    +-^-+---+-v-+
    | 7 < 8 < 9 |
    +---+---+---+

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

    +---+---+---+---+
    | 1 > 2 > 3 > 4 |
    +---+---+---+-v-+
    | 5 > 6 > 7 | 8 |
    +-^-+---+---+-v-+
    | 9 <10 < 11< 12|
    +---+---+---+---+

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const res = [];
  let count = 0;
  let i = 0;
  let j = 0;
  let direction = "r";
  let rEnd = n - 1;
  let lEnd = 0;
  let dEnd = m - 1;
  let uEnd = 1;

  while (count < m * n) {
    count++;
    res.push(matrix[i][j]);

    switch (direction) {
      case "r": {
        if (j === rEnd) {
          i++;
          rEnd--;
          direction = "d";
        } else {
          j++;
        }
        break;
      }
      case "d": {
        if (i === dEnd) {
          j--;
          dEnd--;
          direction = "l";
        } else {
          i++;
        }
        break;
      }
      case "l": {
        if (j === lEnd) {
          i--;
          lEnd++;
          direction = "u";
        } else {
          j--;
        }
        break;
      }
      case "u": {
        if (i === uEnd) {
          j++;
          uEnd++;
          direction = "r";
        } else {
          i--;
        }
        break;
      }
    }
  }

  return res;
};
