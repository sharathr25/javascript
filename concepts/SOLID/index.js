// SOLID stands for:
// S -> Single responsibility principle
// O -> Open closed principle
// L -> Liskov substitution principle
// I -> Interface segregation principle
// D -> Dependency invertion principle

// S -> Single responsibility principle
// This is straight forward a function or a class should only do one thing

// O -> Open closed principle
const { isAValidCity } = require('./cities')
console.log(isAValidCity('New York')) // true
// In the above example if you need to add extra city and make it work you need open and modify cities.js
// which violates open-closed principle
// instead in cities2.js we have exported one more function add valid city which will add
// new city to the cities array
const { isAValidCity2, addValidCity } = require('./cities2')
console.log(isAValidCity2('New York')) // true
console.log(isAValidCity2('Bangalore')) // false
addValidCity('Bangalore')
console.log(isAValidCity2('Bangalore')) // true

// L -> Liskov substitution principle
// Objects should be replaced with instance of their subclasses without altering the behaviour
// This means that if we have a base class, it should not extend the method to classes that cannot
// or won't accept its parent class methods
// check badBird.js which violates this principle
// check goodBird.js which follows this principle

// I -> Interface segregation principle
// This one references the fact that you should not expose your users (i.e developers using your code) to unneeded methods.
// Remember, an interface is just a contract for your classes (listing the methods that need to be implemented).
// So if you’re creating interfaces (for example in TypeScript),
// make sure the required methods that need to be implemented are the ones your users will need,
// don’t force them to implement methods that are optional.

// interface MyModule {
//     close(): void
//     open(connectionString: string): void
//     handleIE8Compatibility(): void
// }

// Consider the above code, users of MyModule might want to implement the close and open methods,
// but if they don’t have to deal with IE8, then that last method is definitely not needed.

// D -> Dependency invertion principle
// this principle states that if you have dependencies in your code,
// you should allow for them to be injected into your logic.
// How do you ask? Simple! By allowing them to be passed in as parameters.
const dbConn = { save: data => console.log(data, 'saved') }

export const saveUser = user => dbConn.save(user)
// This save user function depends dbConn object and only saveUser is exported,
// If we need to test this function how can we mock this dbConn
export const updateUser = (user, dbConn) => dbConn.updateUser(user)
// In the above function we can pass dbConn, So when test this we can pass a mock dbConn object
