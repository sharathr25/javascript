class Subject {
  constructor () {
    this.data
    this.subscribers = []
  }

  subscribe = subscriber => {
    this.subscribers.push(subscriber)
  }

  unsubscribe = subscriber => {
    this.subscribers = this.subscribers.filter(s => s !== subscriber)
  }

  /**
   * @param {any} data
   */
  setData (data) {
    this.data = data
    this.subscribers.forEach(subscriber => subscriber.subjectDataChanged(data))
  }
}

class Observer {
  constructor (name) {
    this.name = name
  }
  subjectDataChanged (data) {
    console.log(`${this.name} got data`, data)
  }
}

const subject = new Subject()
const observer1 = new Observer('observer 1')
const observer2 = new Observer('observer 2')

subject.subscribe(observer1)
subject.subscribe(observer2)

subject.setData('hello world')

subject.unsubscribe(observer2)

subject.setData('hello again')
