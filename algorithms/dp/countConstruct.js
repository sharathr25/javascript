// Write a function `countConstruct(target, wordBank)` that accepts a
// target string and an array of strings

// The function should return the number of ways that the
// `target` can be constructed by concatenating elements of the
// `wordBank` array

// You may reuse elements of `wordBank` as many times as needed

// examples:
// canConstruct(abcdef, [ab, abc, cd, def, abcd]) -> 1
// canConstruct(skateboard, [ bo, rd, ate, t, ska, sk, boar ]) -> 0

// slow without memo
// const countConstruct = (target, wordBank, memo = {}) => {
//   if (target === '') return 1

//   let count = 0

//   for (const word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       count += countConstruct(target.slice(word.length), wordBank)
//     }
//   }
//   return count
// }

const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return 1

  let count = 0

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      count += countConstruct(target.slice(word.length), wordBank, memo)
    }
  }

  memo[target] = count

  return count
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
) // 0
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
) // 4
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
  ])
) // 0
