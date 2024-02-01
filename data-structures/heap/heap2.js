const Comparator = require("../Comparator");

class Heap {
  /**
   *
   * @param {*} compareFunction
   */
  constructor(compareFunction) {
    this.items = [];
    this.comparator = new Comparator(compareFunction);
  }

  /**
   *
   * @param {*} data
   */
  insert(data) {
    this.items.push(data);
    this._bubbleUp(this.items.length - 1);
  }

  /**
   *
   * @returns {*}
   */
  pop() {
    if (!this.items.length) return null;

    this._swap(0, this.items.length - 1);
    const popped = this.items.pop(); // previously root
    this._bubbleDown(0);
    return popped;
  }

  /**
   *
   * @param {number} index
   */
  _bubbleUp(index) {
    if (index <= 0) return;

    const parentIndex = Math.floor((index - 1) / 2);
    if (this.comparator.lessThan(this.items[index], this.items[parentIndex])) {
      this._swap(index, parentIndex);
      this._bubbleUp(parentIndex);
    }
  }

  /**
   *
   * @param {number} index
   */
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

  /**
   *
   * @param {number} i
   * @param {number} j
   */
  _swap(i, j) {
    const temp = this.items[i];
    this.items[i] = this.items[j];
    this.items[j] = temp;
  }

  /**
   *
   * @param {[*]} arr
   */
  insertArr(arr) {
    this.items = arr;
    const lastParentIndex = this.items.length / 2 - 1;
    for (let i = 0; i < lastParentIndex; i++) this._bubbleDown(i);
  }
}

module.exports = Heap;
