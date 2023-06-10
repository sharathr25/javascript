const Heap = require('./heap')

const items = [5, 3, 8, 4, 1, 2]
const items2 = [5, 3, 8, 4, 1, 2]

const heapify = (index, items) => {
  let largerIndex = index

  const leftIndex = index * 2 + 1
  if (leftIndex < items.length && items[leftIndex] > items[largerIndex]) {
    largerIndex = leftIndex
  }

  const rightIndex = index * 2 + 2
  if (rightIndex < items.length && items[rightIndex] > items[largerIndex]) {
    largerIndex = rightIndex
  }

  if (largerIndex === index) return

  const temp = items[index]
  items[index] = items[largerIndex]
  items[largerIndex] = temp

  heapify(largerIndex, items)
}

for (let i = 0; i < items.length; i++) {
  heapify(i, items)
}

// optimisation level 1
// for (let i = 0; i < items.length / 2 - 1; i++) {
//   heapify(i, items)
// }

// optimisation level 2
// for (i = items.length / 2 - 1; i >= 0; i--) {
//   heapify(i, items)
// }

Heap.heapify(items2)

console.log(items)
console.log(items2)

const heap = new Heap()
heap.insert(5)
heap.insert(3)
heap.insert(8)
heap.insert(4)
heap.insert(1)
heap.insert(2)

console.log(heap.items)
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.remove())
