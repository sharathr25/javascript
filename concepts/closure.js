// Closure is when a function remembers and continues to access variables from outside its scope,
// even when the function is executed in a different scope.

// NOTE: closure is part of the nature of a function. Objects don't get closures

function greeting (msg) {
  return function who (name) {
    console.log(`${msg}, ${name}!`)
  }
}

var hello = greeting('Hello')
var howdy = greeting('Howdy')

hello('Kyle')
// Hello, Kyle!

hello('Sarah')
// Hello, Sarah!

howdy('Grant')
// Howdy, Grant!

const buttons = new Map()
// It is not nessacary that the outer scope needs to be a function
for (let [idx, btn] of buttons.entries()) {
  btn.addEventListener('click', function onClick () {
    console.log(`Clicked on button (${idx})!`)
  })
}
// in the above, since we are using let for idx we get block scope every time we run the loop
// the inner onClick creates a closure over idx value
// even the loop finishes its execution, when we click btn we get idx value becuase of closure
