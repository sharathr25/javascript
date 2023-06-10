const sum = (a, b, c) => a + b + c

const arr = [1, 2, 3]
const arrIterator = arr[Symbol.iterator]()
const arrIteratorForArraySpread = arr[Symbol.iterator]()
const arrIteratorForSum = arr[Symbol.iterator]()

// To spread an iterator, you have to have something to spread it into.
// There are two possibilities in JS: an array or an argument list for a function call.

console.log([...arrIteratorForArraySpread]) // [1,2,3]
console.log(sum(...arrIteratorForSum)) // 6

for (const val of arrIterator) {
  console.log(val)
}

// NOTE: iterator should not be processed in order to spread it the below will return empty array
// since we are already done with the iteration(for of loop that we run above)
console.log([...arrIterator]) // []

// map iteration gives a tuple [key, value] so we can use array destructuring
const details = new Map()
details.set('sharath', 25)
details.set('kumar', 25)

for (const [name, age] of details) {
  console.log(`Name: ${name}, Age: ${age}`)
  // o / p:  Name: sharath, Age: 25
  //         Name: kumar, Age: 25
}
