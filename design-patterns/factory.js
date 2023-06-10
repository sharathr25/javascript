class FullTimeEmployee {
  constructor () {
    this.type = 'FULLTIME'
  }
}

class PartTimeEmployee {
  constructor () {
    this.type = 'PARTTIME'
  }
}

function createEmployee (type) {
  switch (type) {
    case 'fulltime':
      return new FullTimeEmployee()
    case 'parttime':
      return new PartTimeEmployee()
    default:
      throw new Error(`There is no employee of type ${type}`)
  }
}

const fullTimeEmployee = createEmployee('fulltime')

console.log(fullTimeEmployee.type)
