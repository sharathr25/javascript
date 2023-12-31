const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort([7, 2, 1, 8, 3]))

// TIME COMPLEXITY
// Best -> O(n)
// Worst -> O(n^2)
