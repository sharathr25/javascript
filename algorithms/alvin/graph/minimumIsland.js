// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
// return the minimum island.

/*
            r - 1 , c
                |
    r, c - 1 - r,c - r, c + 1
                |
            r + 1, c
*/

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

const explore = (grid, r, c, visited) => {
  if (visited.has(`${r},${c}`)) return 0
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length) return 0
  if (grid[r][c] === '0') return 0

  visited.add(`${r},${c}`)

  let count = 1

  count +=
    explore(grid, r - 1, c, visited) +
    explore(grid, r + 1, c, visited) +
    explore(grid, r, c - 1, visited) +
    explore(grid, r, c + 1, visited)

  return count
}

const islandCount = grid => {
  let count = Infinity
  const visited = new Set()

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const size = explore(grid, r, c, visited)
      if (size < count && size !== 0) {
        count = size
      }
    }
  }

  return count
}

console.log(islandCount(grid))
