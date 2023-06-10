// we can declare 3 types of variables
// 1. var
// 2. let
// 3. const

//----------var-------------
var a // if we don't initialise a vaiable it will undefined
console.log('a is declared, but not initialized', a) // undefined

var a = 1 // we can re-decalre a variable as many times hence overriding it
console.log('a is re-declared with value 1', a) // 1

function fun1 () {
  // A variable initialized with var outside of any function is assigned to the global object (global scope) hence accessible everywhere.
  console.log('a is declared outside of this function', a) // 1

  // if we declare a global variable again, local scope will take precidence
  var a = 5
  console.log('created in this function', a) // 5

  // A variable initialized with var is a function scope, in whole function only one variable with same name will be there
  // if we re-decalre a variable in a block still function scoped variable gets overrided.

  // A variable initialized with var inside a function is assigned to that function,
  // it is tied to the local scope of the function and is accessible only inside it
  var b = 2
  console.log('b is only available for this function', b)

  // Inside functions,
  // variables defined in it are accessible throughout all the function body, even if they are declared at the end. it can still be referenced in the beginning.
  // The long-short explanation for this is called 'hoisting'.
  // Basically 'c' hoistable variable declaration (with var) will trigger the JavaScript engine to create (at compilation time)
  // the associate variable references in memory and set them to undefined. Therefore, at runtime, you will be able to access
  // these variable before they have been declared without getting a ReferenceError (except if you use strict mode at the top of your function).
  // Same thing applies for variable declared outside a function.
  console.log(
    'c is hoisted, so it will be set to undefined at compilation time',
    c
  ) // undefined
  var c = 10
  console.log('c is re-assigned with value 10', c) // 10
}

// console.log(b); // ReferenceError: b is not defined

fun1()
//----------var-------------

//----------let-------------
function fun2 () {
  {
    // console.log(l); // hoisted but not initialized, so we cannot access it before initilisation. ReferenceError: Cannot access 'l' before initialization
    // let is block scoped, can't be accessed outside of this block
    let l = 30
    console.log(l)
  }
  // console.log(l); // ReferenceError: l is not defined
}

fun2()
//----------let-------------

// ---------const-----------
// similar to let, but we cannot re-assign
const k = 10
// k = 5 // TypeError: Assignment to constant variable.
// ---------const-----------
