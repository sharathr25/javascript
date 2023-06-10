// program that computes the
// average grade for students who have enrolled in more than one class. Given this array
// of enrollment data
const _ = require('lodash')

const enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 }
]

// Imperative approach
let totalGrades = 0
let totalStudentsFound = 0
for (let index = 0; index < enrollment.length; index++) {
  const student = enrollment[index]
  if (student.enrolled > 1) {
    totalGrades += student.grade
    totalStudentsFound++
  }
}
const average1 = totalGrades / totalStudentsFound
console.log('Average using imperative method', average1)

// The above can re-written in functional declarative way
// steps
// 1. get students enrolled in more that 1 class
// 2. Extracting the above students grade
// 3. compute average grade

const average2 = _.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map(student => student.grade)
  .mean()
  .value()

console.log('Average using declrative functional programming', average2)
