// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

// Specifically,
// an iterator is any object which implements the 'Iterator protocol' by having a next() method that returns an object with two properties:

// value
// The next value in the iteration sequence.

// done
// This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

const myInfiniteIterator = {
  step: 0,
  next () {
    this.step++

    return {
      value: this.step,
      done: false
    }
  }
}

// The most common iterator is the array
// String, Array, TypedArray, Map and Set all are built-in itrables
const arr = [1, 2, 3]
const arrIterator = arr[Symbol.iterator]()

let { done, value } = arrIterator.next()
do {
  ;({ done, value } = arrIterator.next())
  console.log(value)
} while (!done)

// generators special kind of iterators
// Generator functions provide a powerful alternative:
// they allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

function * makeIterator (start = 0, end = 100, step = 1) {
  let iteratorCount = 0
  for (let i = start; i <= end; i = step + i) {
    iteratorCount++
    yield i
  }
}

// generators will not execute imediately, when we call next of a generator function,It will execute untill it encounters a yield
const iterateFrom1to5 = makeIterator(1, 5)
console.log(iterateFrom1to5.next().value) // at this point generator will execute only once since we have yield in the for loop

// we can call next method 4 extra time untill we get the end value i.e 5
console.log(iterateFrom1to5.next().value)
console.log(iterateFrom1to5.next().value)
console.log(iterateFrom1to5.next().value)
console.log(iterateFrom1to5.next().value)

// since we only have yield from 1 to 5,and this call 6th time the generator will return value as undefined and done as true
console.log(iterateFrom1to5.next().value)

// NOTE: make sure you are calling this next method carefully, whenever you call next this iterator will point to next iteration

// we can pass a value to next and the yield will receive this
// NOTE: A value passed to the first invocation of next() is always ignored.
function * fibonacci () {
  let current = 0
  let next = 1
  while (true) {
    const reset = yield current
    const temp = current
    current = reset ? 0 : next
    next = reset ? 1 : next + temp
  }
}

const febSeq = fibonacci()
console.log(febSeq.next().value)
console.log(febSeq.next().value)
console.log(febSeq.next().value)
console.log(febSeq.next().value)
console.log(febSeq.next().value)
console.log(febSeq.next(true).value) // reseting fib here by passing true to next
console.log(febSeq.next().value)

// for more info on iterator refer iterator.js file
