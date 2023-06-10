const arr = [1, 2, 3]
const obj = { firstName: 'john', lastName: 'connor' }

// forEach is a method of array like object(array, set, map, Document.querySelectorAll() etc)
// this will be inherited from Array.prototype using prototype delegation
arr.forEach(console.log)
// and cannot be used for obj
// the below in not valid, if there is a method forEach in the obj then the below code is valid
// obj.forEach(console.log)
// we can't use break, continue or return inside forEach loop

// forin can be used both on array and object
// if you use this with array we will get array index in each iteration
// and index will be string so you cant perform arthematic operations on string
// if you use this with object we will get object key in each iteration

// 0, 1, 2
for (const a in arr) {
  console.log(a)
}
// firstName, lastName
for (const key in obj) {
  console.log(key)
}

// forof can be used only on iterables
for (const a of arr) {
  console.log(a)
}
// the below is not possible, because obj is not iterable
// for (const a of obj) {
//   console.log(a)
// }
// unlike forEach we can use break, continue and return
// unlike forin indices are number and we can perform math operations
