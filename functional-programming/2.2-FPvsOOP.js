// Javascript supprorts both OOP and Functional paradigms
// mastering both of this involves learning to use a combination of both;
// deciding where to draw the line depends on personal preference and the demands of the problem you’re tackling.

class Student {
  constructor (firstName, lastName, address) {
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee {
  constructor (firstName, lastName, workAdress) {
    this.firstName = firstName
    this.lastName = lastName
    this.workAdress = workAdress
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`
  }
}

// Here we are using 'this' to access a data which is side effect, becuase value of 'this' depends on run-time context
// In the above classes even though we are doing the same thing in getter fullName, we cannot re-use the funcions
// We can create a parent class Person and add firstName, lastName and getter fullName there
// but this maybe not required for other child classes
// becuase, they are tightly coupled with the objects data

// To incraese re-usablity we can use functional programming
function getFullName (person) {
  return `${person.firstName} ${person.lastName}`
}
// the above will work as long we pass a object wih properties firstName and lastName

const student = new Student('John', 'Connor')
const emoloyee = new Employee('Kyle', 'Reese')
// OOP
console.log(student.fullName)
console.log(emoloyee.fullName)
// FP
console.log(getFullName(student))
console.log(getFullName(emoloyee))

// OOP -> Focus on nature of data and data relationa ships
// FP -> Focus on operations performed(behaviour)
