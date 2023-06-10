const items = [1, 2, 3]

function Iterator (items) {
  this.items = items
  this.index = 0
}

Iterator.prototype = {
  hasNext: function () {
    this.index < this.items.length
  },
  next: function () {
    return {
      value: this.items[this.index++],
      done: this.index === this.items.length
    }
  }
}

const iterator = new Iterator(items)

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
