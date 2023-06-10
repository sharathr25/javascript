const BinarySearchTreeNode = require('./BinarySearchTreeNode')
const Comparator = require('../Comparator')

class BinarySearchTree {
  /**
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor (compareFunction) {
    this.root = null
    this.compare = new Comparator(compareFunction)
  }

  /**
   * @param {*} value
   * @return {BinarySearchTree}
   */
  insert (value) {
    const newNode = new BinarySearchTreeNode(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (this.compare.lessThan(value, current.value)) {
        if (current.left === null) {
          current.left = newNode
          break
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          break
        }
        current = current.right
      }
    }

    return this
  }

  /**
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  find (value) {
    let current = this.root
    while (current !== null) {
      if (this.compare.lessThan(value, current.value)) current = current.left
      else if (this.compare.greaterThan(value, current.value))
        current = current.right
      else return current
    }
    return null
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains (value) {
    return !!this.find(value)
  }

  /**
   * @return {*[]}
   */
  preOrder () {
    const preOrder = []
    const _preOrder = root => {
      if (root === null) return
      preOrder.push(root.value)
      _preOrder(root.left)
      _preOrder(root.right)
    }
    _preOrder(this.root)
    return preOrder
  }

  /**
   * @return {*[]}
   */
  postOrder () {
    const postOrder = []
    const _postOrder = root => {
      if (root === null) return
      _postOrder(root.left)
      _postOrder(root.right)
      postOrder.push(root.value)
    }
    _postOrder(this.root)
    return postOrder
  }

  /**
   * @return {*[]}
   */
  inOrder () {
    const inOrder = []
    const _inOrder = root => {
      if (root === null) return
      _inOrder(root.left)
      inOrder.push(root.value)
      _inOrder(root.right)
    }
    _inOrder(this.root)
    return inOrder
  }
}

module.exports = BinarySearchTree
