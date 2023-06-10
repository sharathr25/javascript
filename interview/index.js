// prototypal inheritance
const obj = {
  name: 'kumar'
}
const arr = [1]
function fun () {}
//                 null
//                  |
//                Object
//             /    |       \
//         Array  Function  obj
//           /      |
//         arr     fun

// ------------------------------

// JavaScript arguments

/*

JavaScript arguments object is not a real array. 
Instead, it is an array-like object that does not have the comprehensive features of a regular JavaScript array.

*/

const funNotArgs = (a, b) => {
  /*
  [Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/sharath/projects/interview-workout',
      exports: {},
      parent: null,
      filename: '/Users/sharath/projects/interview-workout/index.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/sharath/projects/interview-workout/index.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/sharath/projects/interview-workout',
    exports: {},
    parent: null,
    filename: '/Users/sharath/projects/interview-workout/index.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/sharath/projects/interview-workout/node_modules',
      '/Users/sharath/projects/node_modules',
      '/Users/sharath/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/sharath/projects/interview-workout/index.js',
  '4': '/Users/sharath/projects/interview-workout'
  }
  */
  console.log(arguments) // not available in arrow function
}
funNotArgs(1, 2)

function funArgs (a, b) {
  console.log(arguments) // [Arguments] { '0': 1, '1': 2 } - available in normal function
}
funArgs(1, 2)

// ------------------------------

// spread vs rest
// a, b, c -> rest -> [a,b,c]
// [a,b,c] -> spread -> a, b, c

// rest
function rester (...args) {
  console.log(args) // [ 1, 2, 3 ]
}
rester(1, 2, 3)

// spread
function spreader (a, b, c) {
  console.log(a, b, c)
}
spreader(...[1, 2, 3]) // 1 2 3
console.log([...'abc']) // [ 'a', 'b', 'c' ]
// ------------------------------

// call, apply and bind
// used to borrow functions
const person1 = {
  firstName: 'john',
  lastName: 'connor'
}

const person2 = {
  firstName: 'kyle',
  lastName: 'reese'
}

function printName (separator = '', msg = '') {
  console.log(`${this.firstName} ${this.lastName}${separator}${msg}`)
}

// we can use call or apply to borrow printName function to use with person1 and person2 objects
printName.call(person1)
printName.apply(person2)

// above examples, we can't see diffrence between call and apply
// diffrence comes when we pass args
printName.call(person1, ':', 'hi, good morning') // pass function args comma separated
printName.apply(person1, [':', 'hi, good morning']) // pass function args as an array

// call and apply, immediately executes when we call it. but bind will return a bounded function which can be called later
const printNameBinded = printName.bind(person1)
printNameBinded()

// we can pass args as well for bind, as well for binded function
const printNameBinded2 = printName.bind(person1, ':')
printNameBinded2('hi, good morning')
// ---- or ------
const printNameBinded3 = printName.bind(person1, ':', 'hi, good morning')
printNameBinded3()

// ------------------------------

// polyfill for bind
Function.prototype.myBind = function (...args) {
  const fun = this // we can't do this()[we get TypeError: this is not a function] so storing in a variable
  return function (...args2) {
    const [thisContext, ...rest] = args
    fun.apply(thisContext, [...rest, ...args2])
  }
}
const printNameBindedUsingPolyfill = printName.myBind(person1, ':')
printNameBindedUsingPolyfill('hello, how are you')

// ------------------------------

// closure - function bundled with lexical scope
function x () {
  const a = 1
  return function () {
    console.log(a, 'value coming from parent function')
  }
}
const y = x()
y()

// ------------------------------

// setTimeout + closure
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i) // we get 4, 4, 4. since we are using var by the time this code is excecuted for loop will already increment i in global scope
  }, i * 1000)
}

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i) // we get 1, 2, 3. since we are using let a new scoped variable will be passed to setTimout
  }, i * 1000)
}

// ------------------------------

// function currying is a way of pre-setting args
// function currying using bind
function multiply (a, b) {
  console.log(a * b)
}
const multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3)
// function currying using closure
function multiplyV2 (a) {
  return function (b) {
    console.log(a * b)
  }
}
const multiplyByTwoV2 = multiplyV2(2)
multiplyByTwoV2(3)
// creating a curried function for any number of args, this can be done using bind
// sum(a,b,c) -> sum(a)(b)(c)
function createCurriedVersion (fn) {
  curried = function (...args) {
    if (args.length === fn.length) {
      return fn(...args) // returning value of fn
    } else {
      return curried.bind(this, ...args) // returning a another function
    }
  }
  return curried
}
const sum = (a, b, c) => console.log(a + b + c)
const sumCurried = createCurriedVersion(sum)
sumCurried(1)(2)(3)

// ------------------------------

// recursive summation
function sumR (a) {
  return function (b) {
    return b ? sumR(a + b) : a
  }
}
console.log(sumR(1)(2)(3)(4)())

// ------------------------------

// user.name -> user_name, user.address.home.city -> user_address_home_city etc
const user = {
  name: 'kumar',
  address: {
    home: {
      city: 'kgl',
      street: 'ch street'
    },
    office: {
      city: 'bangalore',
      street: 'cv street'
    }
  }
}
function flatten (object, objectName, newObj) {
  for (const key in object) {
    if (typeof object[key] === 'object')
      flatten(object[key], `${objectName}_${key}`, newObj)
    else newObj[`${objectName}_${key}`] = object[key]
  }
}
const newObj = {}
flatten(user, 'user', newObj)
console.log(newObj)

// ------------------------------

// Javascript is executed in an execution context. this execution context in 2 phases
// phase 1: Memory creation phase
// phase 2: Code execution phase
// 1st global execution context is created
// whenever a function is called again a exeution context will be created

// -----------------------------

// hoisting
console.log(a) // undefined // even though a is initialized later we don't get any error, a will initialized with undefined in memory creation phase in global scope
var a = 1

// but below we can't do
// console.log(b) this will give not defined error

printHello() // this also works, since functions also hoisted
function printHello () {
  console.log('hello')
}

// printHi() // this will give error because since printHi we are assigning using var, we know var will be initialzed with undefined in memory creation phase. and undefined is not a function
var printHi = () => {
  console.log('hi')
}

// -----------------------------

// Temporal deal zone
// console.log(b) // we will get not initialzed error. event though b is hoisted i.e initialized with undefined in memory creation phase but in a diffrent context not in global context
// this is because b is in temporal dead zone(time between hoisting and initialization). hositing --TDZ-- initialization
let b = 10

// ----------------------------

var c = 10
var c = 100 // valid
let d = 10
// let d = 100 // syntax error

// --------------------------

// Scope chain
var z = 20
function fun1 () {
  const a = 10
  function fun2 () {
    console.log(a) // a is in parent scope
    console.log(z) // z is in global scope
  }
  fun2()
}
fun1()
// if the function calls are like below
// global -> fun1 -> fun2 -> ..... -> funN
// funN will look for a variable in below order until it finds
// global <- fun1 <- fun2 <- ..... <- funN

// ---------------------------

// block
{
} // this a block, used to combine multiple statements into a group

// block scope
{
  var p = 10
  let q = 20
  const r = 20
}
console.log(p)
// console.log(q) will throw error, q is block scoped
// console.log(r) will throw error, r is block scoped

// shadowing var
var s = 10
{
  var s = 11
  console.log(s) // we get 11, becuase s = 11 overrides global s. so we get 11
}

// shadowing let or const
let t = 10
{
  let t = 11
  console.log(t) // we get 11, we get blocked scoped one because of shadowing
}
console.log(t) // 10

// illegal shadowing
let u = 10
{
  // var u = 11 syntax error
}

var v = 10
{
  let v = 11
  console.log(v) // 11 - this is valid
}

// --------------------------
