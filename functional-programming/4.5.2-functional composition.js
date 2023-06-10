// Functional composition can be used to create complex functions which solves a big problem by composing simple functions which solves small problems
const _ = require('lodash')
const fp = require('lodash/fp')

const str = `We can only see a short distance
ahead but we can see plenty there
that needs to be done`

const explode = str => str.split(/\s+/)

const count = arr => arr.length

const countWords = fp.compose(count, explode) // this is function description, This will not evaluate untill we pass the str arg

console.log(countWords(str)) // this is evaluation, O/P - 19

// So using functional composition we separated out function description and its evaluation

// g :: A -> B    <- g is function from type A to B
// f :: B -> C    <- f is function from type B to C
// By composing these two we can get f(g) which is function from A to C

// Internal implementaion of compose
function compose (arguments) {
  let args = arguments
  let start = args.length - 1
  return function () {
    let i = start
    let result = args[start].apply(this, arguments)
    while (i--) result = args[i].call(this, result)
    return result
  }
}

// Another example
const trim = str => str.replace(/^\s*|\s*$/g, '')

const normalize = str => str.replace(/\-/g, '')

const validLength = (param, str) => str.length === param

const checkLengthOfSsn = _.partial(validLength, 9)

const cleanInput = fp.compose(normalize, trim)

const isValidSsn = fp.compose(checkLengthOfSsn, cleanInput)

console.log(isValidSsn('  1234-1234-1 ')) // true
console.log(isValidSsn('  12-1234-1 ')) // false
