const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

class MyCache {
  #cache
  #limit
  #compare
  constructor (comparator) {
    this.#cache = []
    this.#limit = 3
    this.#compare = comparator
  }

  get (key) {
    const comparator = data => this.#compare(key, data)
    const value = this.#cache.find(comparator, this)
    if (value) {
      this.#cache = [value, ...this.#cache.filter(comparator, this)]
    }
    return value
  }

  set (key, value) {
    if (!this.#cache.find(value => this.#compare(key, value), this)) {
      if (this.#cache.length === this.#limit) {
        this.#cache.pop()
      }
      this.#cache.unshift(value)
    }
  }
}

class FakeDB {
  #employees
  constructor () {
    this.#employees = [
      {
        id: '001',
        name: 'John',
        age: 25
      },
      {
        id: '002',
        name: 'Connor',
        age: 30
      },
      {
        id: '003',
        name: 'Sarrah',
        age: 45
      },
      {
        id: '004',
        name: 'Sarrah',
        age: 45
      }
    ]
  }

  async getEmployee (id) {
    await sleep(1000)
    return this.#employees.find(e => e.id === id)
  }
}

class EmployeeService {
  #cache
  #db
  constructor () {
    this.#cache = new MyCache((key, value) => value.id === key)
    this.#db = new FakeDB()
  }

  async getEmployee (id) {
    const dataFromCache = this.#cache.get(id)
    if (dataFromCache) return dataFromCache
    console.log('calling DB......')
    const dataFromDb = await this.#db.getEmployee(id)
    if (dataFromDb) this.#cache.set(id, dataFromDb)
    return dataFromDb
  }
}

const runner = async () => {
  const employeeService = new EmployeeService()
  let data = await employeeService.getEmployee('001')
  console.log(data)
  data = await employeeService.getEmployee('002')
  console.log(data)
  data = await employeeService.getEmployee('001')
  console.log(data)
  data = await employeeService.getEmployee('003')
  console.log(data)
  data = await employeeService.getEmployee('004')
  console.log(data)
}

runner()
