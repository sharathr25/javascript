/*

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const defaultCompareFunction = (a, b) => {
  if (a === b) return 0
  return a < b ? -1 : 1
}

class Heap {
  constructor (compareFunction = defaultCompareFunction) {
    this.items = []
    this.size = 0
    this.compare = compareFunction
  }

  equals (a, b) {
    return this.compare(a, b) === 0
  }

  lessThan (a, b) {
    return this.compare(a, b) < 0
  }

  lessThanOrEqual (a, b) {
    return this.lessThan(a, b) || this.equals(a, b)
  }

  swap (first, second) {
    const temp = this.items[first]
    this.items[first] = this.items[second]
    this.items[second] = temp
  }

  parentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  bubbleUp () {
    let index = this.size - 1

    while (
      index > 0 &&
      this.lessThan(this.items[index], this.items[this.parentIndex(index)])
    ) {
      const parentIndex = this.parentIndex(index)
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  insert (val) {
    this.items[this.size++] = val
    this.bubbleUp()
  }

  leftChildIndex (index) {
    return index * 2 + 1
  }

  hasLeftChild (index) {
    return this.leftChildIndex(index) <= this.size
  }

  leftChild (index) {
    return this.items[this.leftChildIndex(index)]
  }

  rightChildIndex (index) {
    return index * 2 + 2
  }

  hasRightChild (index) {
    return this.rightChildIndex(index) <= this.size
  }

  rightChild (index) {
    return this.items[this.rightChildIndex(index)]
  }

  validParent (index) {
    if (!this.hasLeftChild(index)) return true
    if (!this.hasRightChild(index))
      return this.lessThanOrEqual(this.items[index], this.leftChild(index))

    return (
      this.lessThanOrEqual(this.items[index], this.leftChild(index)) &&
      this.lessThanOrEqual(this.items[index], this.rightChild(index))
    )
  }

  smallestChildIndex (index) {
    if (!this.hasLeftChild(index)) return index
    if (!this.hasRightChild(index)) return this.leftChildIndex(index)

    return this.lessThan(this.leftChild(index), this.rightChild(index))
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index)
  }

  bubbleDown () {
    let index = 0

    while (index <= this.size && !this.validParent(index)) {
      const smallestChildIndex = this.smallestChildIndex(index)
      this.swap(index, smallestChildIndex)
      index = smallestChildIndex
    }
  }

  remove () {
    const root = this.items[0]
    this.items[0] = this.items[--this.size]
    this.bubbleDown()
    return root
  }
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // create a heap
  const heap = new Heap((a, b) => {
    if (a.val === b.val) return 0
    return a.val < b.val ? -1 : 1
  })

  // insert all list nodes to head
  lists.forEach(root => {
    let current = root

    while (current) {
      heap.insert(current)
      current = current.next
    }
  })

  // pop from heap and create new linked list
  let root = null
  let tail = null
  const count = heap.size
  for (let k = 1; k <= count; k++) {
    const newNode = heap.remove()
    newNode.next = null
    if (!root) {
      root = tail = newNode
    } else {
      tail.next = newNode
      tail = newNode
    }
  }

  return root
}
