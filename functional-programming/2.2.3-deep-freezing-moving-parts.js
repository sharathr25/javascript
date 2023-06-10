const obj = { a: 1, b: 2 }
obj.a = 5 // Even when we assign a const to an object its values can be changed
console.log(obj.a) // 5
// So in JS because of this maintaining data immutable in very tricky
// we can user Object.freeze to avoid this
const freezedObject = Object.freeze({ a: 1, b: 2, internal: { c: 11111 } })
freezedObject.a = 10000 // -> no effect
console.log(freezedObject.a) // -> 1
// Even with Object.freeze if we have nested object it will escape the boundaries of protection given by Object.freeze().
freezedObject.internal.c = 1
console.log(freezedObject.internal.c) // -> 1
// So still we didn't solve the issue of immutablity
// In order to achieve a deep-freeze we need to write a recursive function which will freeze object’s nested structure,
function deepFreeze (obj) {
  if (isObject(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach(name => deepFreeze(obj[name]))
    Object.freeze(obj)
  }
  return obj
}
