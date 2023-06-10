// A prototype is a characteristic of an object, and specifically resolution of a property access.

// when we create an object there will be a default prototype linkage connects to the Object.prototype object,
// which has common built-in methods on it like toString() and valueOf(), among others.

// A series of objects linked together via prototypes is called the "prototype chain."

const homework = {
  topic: 'JS',
  study () {
    console.log(`Please study ${this.topic}`)
  }
}
//                 prototype linkage
// homework(topic) ----------------> Object.prototype(toString)
console.log(homework.toString()) // this works because the delegation invokes Object.prototype.toString

// To define an object prototype linkage, you can create the object using the Object.create(..)
const otherHomeWork = Object.create(homework)
//               prototype linkage                      prototype linkage
// otherHomework ----------------> homework(topic = JS) ----------------> Object.prototype(toString)
console.log(otherHomeWork.topic) // JS - this works because the delegation gets homework.topic

// we can create a topic in otherHomework as well which will shadow homework.topic
otherHomeWork.topic = 'Math'
//                             prototype linkage                      prototype linkage
// otherHomework(topic = Math) ----------------> homework(topic = JS) ----------------> Object.prototype(toString)
console.log(otherHomeWork.topic) // Math

// 'this' in prototype chaining
const jsHomework = Object.create(homework)
jsHomework.topic = 'JS'
jsHomework.study() // Please study JS

const mathHomework = Object.create(homework)
mathHomework.topic = 'Math'
mathHomework.study() // Please study Math

//                             prototype linkage
// jsHomework(topic = JS) ----------------------\
//                                               \                prototype linkage
//                                                homework(study) ----------------> Object.prototype(toString)
//                                               /
// mathHomework(topic = Math) ------------------/
//                            prototype linkage

// when we run jsHomework.study() we get study function from homework object with delegation
// but it will execute in jsHomework object so this will point to jsHomework
// same for mathHomework
