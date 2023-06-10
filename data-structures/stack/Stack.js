const LinkedList = require('../linkedList/LinkedList')
class Stack {
  constructor () {
    this.linkedList = new LinkedList()
  }

  /**
   *
   * @returns {Boolean}
   */
  isEmpty () {
    return !this.linkedList.head
  }

  /**
   *
   * @returns {*} - element at the top of the stack
   */
  peek () {
    if (this.isEmpty()) return null
    return this.linkedList.head.value
  }

  /**
   *
   * @param {*} value - element to insert
   */
  push (value) {
    this.linkedList.append(value)
    return this
  }

  /**
   *
   * @returns {(*|null)} - element at the top of the stack
   */
  pop () {
    const removedHead = this.linkedList.deleteTail()
    return removedHead ? removedHead.value : null
  }

  /**
   *
   * @param {Function} [cb]
   * @returns {String}
   */
  toString (cb) {
    return this.linkedList.toString(cb)
  }
}

module.exports = Stack
