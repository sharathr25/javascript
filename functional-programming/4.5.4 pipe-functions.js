const fp = require('lodash/fp')

// example, get smartest student from below student names and grades
const students = ['john', 'connor', 'kyle', 'reese']
const grades = [82, 100, 58, 75]

const smartestStudent = fp.compose(
  fp.head,
  fp.pluck(0),
  fp.reverse,
  fp.sortBy(fp.prop(1)),
  fp.zip
)

console.log(smartestStudent(students, grades)) // connor

// The above smartestStudent first evaluates zip function then it evaluates all the other functions in backward direction
// This is little bit harder to follow,
// So we can use pipe function which does same this as pipe function but in reverse direction, so data will be handled from top to bottom
const smartestStudent1 = fp.pipe(
  fp.zip,
  fp.sortBy(fp.prop(1)),
  fp.reverse,
  fp.pluck(0),
  fp.head
)

console.log(smartestStudent1(students, grades)) // connor
