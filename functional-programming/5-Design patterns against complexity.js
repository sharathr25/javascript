const fp = require('lodash/fp')
// Many issues can arise in software where data inadvertently becomes null or
// undefined, exceptions are thrown, or network connectivity is lost, to name a few.
// Our code needs to account for the potential of any of these issues occurring, which unavoidably creates complexity.

// To handle this complexity we have 'functors' as a means to create simple data types on which functions can be mapped.
// A functor is applied to data types called 'monads' that contain specific behavior for dealing with errors in different ways.

const mockDb = {
  students: [
    {
      id: 'student-1',
      name: 'john',
      address: {
        school: 'a',
        country: 'india'
      }
    },
    {
      id: 'student-2',
      name: 'connor',
      address: {
        school: 'b',
        country: 'india'
      }
    }
  ]
}

// -------------start------------------------
// ******** Error handling with try-catch **********
// typical error handling in JS
try {
  // Code that might throw an exception here
} catch (e) {
  // statements to handle any exceptions
  console.log('ERROR' + e.message)
}

const find = (mockDb, id) => mockDb.find(d => d.id === id)
const findObject = fp.curry((db, id) => {
  const result = find(db, id)
  if (!result) {
    throw new Error('Object with ID [' + id + '] not found')
  }
  return result
})
const findStudent = findObject(mockDb.students)

try {
  const student = findStudent('student-1') // this may throw error
  console.log(student)
} catch (error) {
  console.log(error)
}
// Just as we abstract conditions and loops we need to abstract error handling as well.
// Clearly, functions that use try-catch as shown here can’t be composed or chain together
// and put a great deal of pressure on the design of your code.
// ----------------end---------------

// ------------start-------------------
// ****** Problems with null-checking ******
// We can check for null or undifined before accessing any value from an object as shown below
function getCountry (student) {
  if (student) {
    let address = student.address
    if (address) {
      let country = address.country
      return country
    }
    throw new Error('Error extracting country info')
  }
  throw new Error('Error extracting country info')
}
// But checking for null in multiple places is not the best idea and seems complex
// -----------end--------------------

// -----------start--------------------
// ******** Building a better solution: 'functors' **********
// In this one 1st we need to create a safety box around the code where there is chance of error
// The below lines of code
//  _________________________________________________________
// |  const student = findStudent(1) // this may throw error |
// |  console.log(student)                                   | <---- safety box
// |  .....more lines of code                                |
// |_________________________________________________________|
// Thats where wrappers comes into picture
// -------------end--------------------

// -------------start-----------------
// ***********  Wrapping unsafe values ***********
class WrapperV1 {
  constructor (value) {
    this._value = value // Simple type that stores a single value of any type
  }
  map (fn) {
    return fn(this._value) // Maps a function over this type (just like arrays)
  }
  toString () {
    return `Wrapper (${value})`
  }
}
const wrap = val => new WrapperV1(val) // helper fucntion to create a wrapper
// ex:
const wrappedValue = wrap('FP in JS')
console.log(wrappedValue.map(fp.identity)) // FP in JS
// We can map any function not only identity
console.log(wrappedValue.map(fp.toUpper)) // FP IN JS
// -------------end--------------------

// -------------start-----------------
// ************ Functors explained ************
WrapperV1.prototype.fmap = function (f) {
  return wrap(f(this._value))
}
// fmap knows how to apply functions to values wrapped in a context. It first opens the
// container, then applies the given function to its value, and finally closes the value back
// into a new container of the same type. This type of function is known as a 'functor'
// simple ex:
const sum = fp.curry((a, b) => a + b)
const increment = sum(1)
const decrement = sum(-1)

const two = wrap(2)
const three = two.fmap(increment)
console.log(three) // Wrapper { _value: 3 }
console.log(three.map(fp.identity)) // 3
// In the above example when we apply increment we get a wrapper, then when we map identity we get value.
// Since the value never escapes wrapper before we apply map we can apply as many functions we like
console.log(two.fmap(increment).fmap(decrement)) // Wrapper { _value: 2 }

// So 2 main properties of functors:
// ■ They must be side effect–free.
//  You can map the identity function to obtain the same value over a context.
wrap('Get Functional').fmap(fp.identity) //-> Wrapper('Get Functional')
// ■ They must be composable.
// This property indicates that the composition of a function applied to fmap should be exactly the same as chaining fmap functions together.
two.fmap(fp.compose(increment, fp.tap(console.log))).map(fp.identity) //-> 3
// -------------end-----------

// -------------start---------
// ************* Drawback of functors *************
// With with functors,
// We can safely apply functions to values in an immutable and safe manner
// consider below example
const findStudentV2 = fp.curry(function (db, ssn) {
  return wrap(find(db, ssn))
})

const getAddress = function (student) {
  return wrap(student.fmap(fp.prop('address')))
}

const studentAddress = fp.compose(getAddress, findStudentV2(mockDb.students))

console.log(studentAddress('student-1'))
// the below is O/P
// Wrapper {
// _value: Wrapper { _value: { school: 'a', country: 'india' } }
//}
// we get doubly wrapped object
// In order to get value we have to apply identity function twice
console.log(
  studentAddress(1)
    .map(fp.identity)
    .map(fp.identity)
) // { school: 'a', country: 'india' }
// If we more than 2 nested wrappers we end up with lot of mapping like above, cleary not a great solution
// Monads are used to solve this kind of problems
// -------------end---------

// -----------start----------
// ************ Monads: from control flow to data flow *********
// this is similar to functors
let half = val => val / 2
console.log(wrap(4).fmap(half)) // Wrapper { _value: 3 }
console.log(wrap(3).fmap(half)) // Wrapper { _value: 1.5 }
// But what if need to apply only when the value is even,
// We will create another functor for this purpose
class Empty {
  constructor (_) {}
  map () {
    return this
  }
  fmap () {
    return this
  }
}
const empty = () => new Empty()
// Now
const isEven = val => val % 2 === 0
half = val => (isEven(val) ? wrap(val / 2) : empty())
console.log(half(4))
console.log(half(3))
// since we are returning an Empty container instead of null when trying to halve an odd number,
// which lets you apply operations on values without being concerned about errors that occur:
console.log(half(4).fmap(increment))
console.log(half(3).fmap(increment))
// Now we need to understand these two important concepts:
// ■ Monad—Provides the abstract interface for monadic operations
// ■ Monadic type—A particular concrete implementation of this interface
// every monad is different and, depending on its purpose,
// can define different semantics driving its behavior
// (that is, for how map or fmap should work).
// These types define what it means to chain operations or nest
// functions of that type together, yet all must abide by the following interface:
// ■ 'Type constructor' —Creates monadic types (similar to the Wrapper constructor).
// ■ 'Unit function' — Inserts a value of a certain type into a monadic structure (similar
// to the wrap and empty functions you saw earlier). When implemented in the
// monad, though, this function is called 'of'.
// ■ 'Bind function' — Chains operations together (this is a functor’s fmap, also known as
// flatMap). From here on, I’ll use the name map for short.
// ■ Join operation—Flattens layers of monadic structures into one. This is especially
// important when you’re composing multiple monad-returning functions.
class Wrapper {
  constructor (value) {
    this.value = value // Type constructor
  }
  static of (a) {
    return new Wrapper(a) // Unit function
  }
  map (f) {
    return Wrapper.of(f(this.value)) // Bind function(functor)
  }
  join () {
    if (!(this.value instanceof Wrapper)) {
      return this // Flattens nested layers
    }
    return this.value.join()
  }
  get () {
    return this.value
  }
  toString () {
    return `Wrapper (${this.value})`
  }
}
// ex:
console.log(
  Wrapper.of('Hello monad')
    .map(fp.toUpper)
    .map(fp.identity)
)
// ex: join in action to avoid appyling identity multiple times
const findStudentV3 = fp.curry(function (db, ssn) {
  return Wrapper.of(find(db, ssn))
})

const getAddressV3 = function (student) {
  return Wrapper.of(student.map(fp.prop('address')))
}

const studentAddressV3 = fp.compose(
  getAddressV3,
  findStudentV3(mockDb.students)
)
console.log(
  studentAddressV3('student-1')
    .join()
    .get()
) // { school: 'a', country: 'india' }
// ----------------end--------------------

// ----------------start-----------------
// ********** Error handling with 'Maybe' and 'Either' monads *********

// Container type (parent class)
class Maybe {
  // Builds a Maybe from a nullable type (constructor function).
  // If the value lifted in the monad is null, instantiates a Nothing;
  // otherwise, stores the value in a Just subtype to handle the presence of a value.
  static fromNullable (a) {
    return a ? new Just(a) : new Nothing()
  }
}

// Subtype Just to  the presence of a value
class Just extends Maybe {
  constructor (value) {
    super()
    this.value = value
  }

  // Maps a function to Just, transforms its value, and stores it back into the container
  map (f) {
    return new Just(f(this.value))
  }

  // Extracts the value from the structure or a provided default monad unity operation
  getOrElse () {
    return this.value
  }

  filter (f) {
    Maybe.fromNullable(f(this.value) ? this.value : null)
  }

  get isJust () {
    return true
  }

  get isNothing () {
    return false
  }

  toString () {
    return `Maybe.Just(${this.value})`
  }
}

// Subtype Nothing to protect against the absence of a value
class Nothing extends Maybe {
  map () {
    return this
  }

  // Attempting to extract a value from a Nothing type generates an exception indicating a bad use of the monad otherwise,
  // the value is returned.
  get value () {
    throw new TypeError("Can't extract the value of a Nothing.")
  }

  //Ignores the value and returns the other
  getOrElse (other) {
    return other
  }

  // If a value is present and matches the given predicate, returns a Just describing the value;
  // otherwise returns a Nothing
  filter () {
    return this.value
  }

  get isJust () {
    return false
  }

  get isNothing () {
    return true
  }

  toString () {
    return 'Maybe.Nothing'
  }
}

const safeFindStudentFn = fp.curry(function (db, ssn) {
  return Maybe.fromNullable(find(db, ssn))
})
const safeFindStudent = safeFindStudentFn(mockDb.students)
console.log(safeFindStudent('student-1'))
// O/P
// Just {
//   value: { id: 'student-1', name: 'john', address: { school: 'a', country: 'india' } }
// }
const s = safeFindStudent('student-5')
// O/P
// Nothing {}

// console.log(getCountry(s)) this call will throw Error: Error extracting country info

// lets see Maybe in action
const getCountryV4 = student =>
  student
    .map(fp.prop('address'))
    .map(fp.prop('country'))
    .getOrElse('Country does not exist!')

const country = fp.compose(getCountryV4, safeFindStudent)

console.log(country('student-1')) // india

console.log(country('student-5')) // Country does not exist!

// |----Just------------------|       |----Nothing---------------|
// |                          |       |                          |
// |        [ student ]       |       |                          |
// |                          |       |                          |
// |--------------------------|       |--------------------------|
//               |_______________  _____________|
//                               \/
//                             Maybe
