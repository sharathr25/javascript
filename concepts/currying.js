// f(a,b,c) -> f(a)(b)(c)
const sumOfhreeNumbers = a => b => c => a + b + c

console.log(sumOfhreeNumbers(1)(2)(3))

// Partial functions
// partial currying. this usefull when we need to fix some args
// so currying is usefull when we need to fix args and use the returned functions for further processing
const sumOfTwo = sumOfhreeNumbers(1)(2)

console.log(sumOfTwo(3))

// First class functions:
// in functional programming JavaScript has first class functions because it supports functions as arguments and return values.

// functional composition
// you have a sequence of functions applied all on the same single argument as f(g(x))
const squareNumber = a => a * a
console.log(squareNumber(sumOfhreeNumbers(1)(2)(3)))
