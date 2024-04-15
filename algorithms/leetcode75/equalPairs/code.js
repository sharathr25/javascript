/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
  const rowVals = new Map();
  const colVals = new Map();
  const colStrs = [];

  for (let i = 0; i < grid.length; i++) {
    let s = "";
    for (let j = 0; j < grid[0].length; j++) {
      if (!colStrs[j]) colStrs[j] = "";
      colStrs[j] += grid[i][j] + ",";
      s += grid[i][j] + ",";
    }
    if (!rowVals.has(s)) rowVals.set(s, 0);
    rowVals.set(s, rowVals.get(s) + 1);
  }

  for (let i = 0; i < colStrs.length; i++) {
    const s = colStrs[i];
    if (!colVals.has(s)) colVals.set(s, 0);
    colVals.set(s, colVals.get(s) + 1);
  }

  let count = 0;
  for (let [key, val] of rowVals) {
    if (colVals.has(key)) {
      count += colVals.get(key) * val;
    }
  }

  return count;
};

module.exports = { equalPairs };
