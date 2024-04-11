// GRID TRAVELLER
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
// The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// + - + - + - + - +
// | S |   |   |   |
// + - | - + - + - +
// |   |   |   |   |
// + - + - + - + - +
// |   |   |   | F |
// + - + - + - + - +

// S -> start, F -> finish
// leetcode link: https://leetcode.com/problems/unique-paths/

// without memo, takes lot of time
// const gridTravel = (m, n) => {
//   if (m === 1 && n === 1) return 1
//   if (m === 0 || n === 0) return 0

//   return gridTravel(m - 1, n) + gridTravel(m, n - 1)
// }

const gridTravel = (m, n, memo = {}) => {
  const key = `${m},${n}`
  if (key in memo) return memo[key]
  if (m === 1 && n === 1) return 1
  if (m === 0 || n === 0) return 0

  memo[key] = gridTravel(m - 1, n) + gridTravel(m, n - 1)
  return memo[key]
}

console.log(gridTravel(3, 2)) // 2
console.log(gridTravel(3, 7)) // 28
