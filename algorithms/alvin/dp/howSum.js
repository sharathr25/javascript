// Write a function `howSum(targetSum, numbers)` that takes in a
// targetSum and array of numbers as arguments

// The function should return an array containing any combination of
// elements that add up to exactly the targetSum. If there is no
// combination that adds up to the targetSum, then return null

// If there are multiple combinations possible, you may return any single one

// examples
// howSum(7, [5,3,4,7]) -> [7] or [3,4]
// howSum(8, [2, 3, 5]) -> [2, 2, 2, 2] or [3, 5]
// howSum(7, [2, 4]) -> null
// howSum(0, [1, 2, 3]) -> []

// slow without memo
// const howSum = (targetSum, numbers) => {
//   if (targetSum === 0) return []
//   if (targetSum < 0) return null

//   for (const number of numbers) {
//     const rem = targetSum - number
//     const result = howSum(rem, numbers)
//     if (result !== null) return [...result, number]
//   }
//   return null
// }

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return []
  if (targetSum < 0) return null

  for (const number of numbers) {
    const rem = targetSum - number
    const result = howSum(rem, numbers, memo)
    if (result !== null) {
      const updatedResult = [...result, number]
      memo[targetSum] = updatedResult
      return updatedResult
    }
  }

  memo[targetSum] = null
  return null
}

console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [ 4, 3 ]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [ 2, 2, 2, 2 ]
console.log(howSum(300, [7, 14])) // null
