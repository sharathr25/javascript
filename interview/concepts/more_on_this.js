// Scope is static and contains a fixed set of variables available at the moment and location you define a function,
// but a function's execution context is dynamic, entirely dependent on how it is called
// (regardless of where it is defined or even called from).

// 'this' is not a fixed characteristic of a function based on the function's definition,
// but rather a dynamic characteristic that's determined each time the function is called.

function classroom (teacher) {
  return function study () {
    console.log(`${teacher} says to study ${this.topic}`)
  }
}
// since we are using this in study function, makes this function this-aware function
// means study depends execution context
var assignment = classroom('Kyle')

assignment() // since we are just calling this function without any context(without strict mode) 'this' will be assigned global/window
// Kyle says to study undefined

const homework = {
  topic: 'JS',
  assignment: assignment
}
homework.assignment() // Now we are executing the function throgh homework object 'this' will be homework object
// Kyle says to study JS

const otherHomeWork = {
  topic: 'Math'
}
assignment.call(otherHomeWork) // we are using call to set 'this'
// Kyle says to study Math
