const Comparator = require("../Comparator");

class Heap {
  constructor(compareFunction) {
    this.items = [];
    this.comparator = new Comparator(compareFunction);
  }

  insert(data) {
    this.items.push(data);
    this._bubbleUp(this.items.length - 1);
  }

  pop() {
    if (!this.items.length) return null;

    this._swap(0, this.items.length - 1);
    const popped = this.items.pop(); // previously root
    this._bubbleDown(0);
    return popped;
  }

  _bubbleUp(index) {
    if (index <= 0) return;

    const parentIndex = Math.floor((index - 1) / 2);
    if (this.comparator.lessThan(this.items[index], this.items[parentIndex])) {
      this._swap(index, parentIndex);
      this._bubbleUp(parentIndex);
    }
  }

  _bubbleDown(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let smallest = index;

    if (
      left < this.items.length &&
      this.comparator.lessThan(this.items[left], this.items[smallest])
    ) {
      smallest = left;
    }

    if (
      right < this.items.length &&
      this.comparator.lessThan(this.items[right], this.items[smallest])
    ) {
      smallest = right;
    }

    if (smallest != index) {
      this._swap(smallest, index);
      this._bubbleDown(smallest);
    }
  }

  _swap(i, j) {
    const temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }
}

// checking

// const heap = new Heap();
// heap.insert(10);
// heap.insert(2);
// heap.insert(5);
// heap.insert(3);
// heap.insert(1);
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
// console.log(heap.pop());
