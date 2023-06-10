// Write a function `bestSum(targetSum, numbers)` that takes in a
// targetSum and array of numbers as arguments

// The function should return an array containing the shortest combination of
// elements that add up to exactly the targetSum. If there is no
// combination that adds up to the targetSum, then return null

// If there are multiple combinations possible, you may return any single one

// examples
// bestSum(7, [5,3,4,7]) -> [7]
// bestSum(8, [2, 3, 5]) -> [3, 5]
// bestSum(7, [2, 4]) -> null
// bestSum(0, [1, 2, 3]) -> []

// slow without memo
// const bestSum = (targetSum, numbers) => {
//   if (targetSum === 0) return []
//   if (targetSum < 0) return null

//   let shortestSumArr = null
//   for (const number of numbers) {
//     const rem = targetSum - number
//     const result = bestSum(rem, numbers)
//     if (result !== null) {
//       const arr = [...result, number]
//       if (!shortestSumArr || arr.length < shortestSumArr.length) {
//         shortestSumArr = arr
//       }
//     }
//   }
//   return shortestSumArr
// }

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  let shortestSumArr = null
  for (const number of numbers) {
    const rem = targetSum - number
    const result = bestSum(rem, numbers, memo)
    if (result !== null) {
      const arr = [...result, number]
      if (!shortestSumArr || arr.length < shortestSumArr.length) {
        shortestSumArr = arr
      }
    }
  }
  memo[targetSum] = shortestSumArr
  return shortestSumArr
}

console.log(bestSum(7, [2, 3])) // [3, 2, 2]
console.log(bestSum(7, [5, 3, 4, 7])) // [ 4, 3 ]
console.log(bestSum(7, [2, 4])) // null
console.log(bestSum(8, [2, 3, 5])) // [ 3, 5 ]
console.log(bestSum(300, [7, 14])) // null
