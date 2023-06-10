// One of the benefits of using functional libraries like 'lodash.fp' or 'Ramda' is that all functions have been properly configured with currying in mind,
// making them versatile when composed into function pipelines.

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

console.log(smartestStudent(students, grades))
