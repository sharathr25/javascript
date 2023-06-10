const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    const temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}

console.log(selectionSort([7, 2, 1, 8, 3]))

// TIME COMPLEXITY
// Best -> O(n^2)
// Worst -> O(n^2)
