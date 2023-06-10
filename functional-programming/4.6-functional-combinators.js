const fp = require('lodash/fp')
// In imperative code we use if-else, for etc to drive the program
// This gap is to be filled in some way in FP So,
// In FP we fill these gaps using 'functional combinators'

// Combinators are higher-order functions that can combine primitive artifacts like
// other functions (or other combinators) and behave as control logic.
// Combinators typically don’t declare any variables of their own or contain any business logic; they’re
// meant to orchestrate the flow of a functional program. In addition to compose and
// pipe, there’s an infinite number of combinators, but we’ll look at some of the most
// common ones:
// ■ identity
// ■ tap
// ■ alternation
// ■ sequence
// ■ fork (join)

// Identity (I-combinator)
// This returns the same value that is provided
const identity = a => a // user defined one, we have in lodah/fp as well
console.log(identity('identity(user defined)'))
console.log(fp.identity('identity(lodash/fp)'))

// Tap (K-combinator)
// This function is extremely usefull to perform void fucntions such as logging or writing a file etc
const log = str => console.log(str)
const tap = fp.tap(log)
tap('tap')

// Alternation (OR-combinator)
// This combinator takes two functions
// and returns the result of the first one if the value is defined (not false, null, or undefined);
// otherwise, it returns the result of the second function
const names = ['john', 'connor']

const findName = name => names.find(n => n === name)
const addName = name => names.push(name)

const alt = fp.curry((fun1, fun2, val) => fun1(val) || fun2(val)) // This will try to get a name, If it is not there it push to names

console.log(alt(findName, addName, 'kyle')) // 3
console.log(alt(findName, addName, 'kyle')) // kyle

// Sequence (S-combinator)
// This combinator is used to loop over a sequence of functions.
// It takes two or more functions as parameters and returns a new function,
// which runs all of them in sequence against the same value.
const seq = function (/*funcs*/) {
  const funcs = [...arguments]
  return val => {
    funcs.forEach(fn => {
      fn(val)
    })
  }
}
seq(console.debug, console.log)('123')
// In the above code snippet we performing debug and log one after other for the same input value

// Fork (join) combinator
// The fork combinator is useful in cases where you need to process a single resource in
// two different ways and then combine the results.
//    input
//      |
// ____/ \_____
// |          |
// f1        f2
// |___fork___|
//     \ /
//      |
//     join
const fork = (join, func1, func2) => {
  return val => {
    return join(func1(val), func2(val))
  }
}
const numbers = [1, 2, 3]
const average = fp.pipe(fork(fp.divide, fp.sum, fp.size), fp.tap(console.log))
average(numbers)
