const _ = require('lodash')

// In JS regular function can be called with missing arguments
// i.e f(arg1, arg2, arg3) -> can be called f(arg1val, ar2val)
// And the above function will execute with arg3 as undifned(JS runtime sets arg3 as undefined)
const regularFn = (arg1, arg2, arg3) => {
  console.log(arg1, arg2, arg3)
}
regularFn(1, 2) // -> 1,2,undefined

// If Currrined function is called with missing args,
// then it will return another function which will wait for the missing args to be passed before running
const sum = (a, b) => a + b
const curry = fn => {
  return a => {
    return b => {
      return fn(a, b)
    }
  }
}
console.log(curry(sum)(1)(2)) // function call with all the args
const increment = curry(sum)(1) // function call with missing args, so we got another function which excepts missing arg
console.log(increment(5)) // execution of above fucntion by missing args

// the above using lodash
const decrement = _.curry(sum)(-1)
console.log(decrement(2))
