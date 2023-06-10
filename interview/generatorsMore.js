function* infinityAndBeyond () {
  let i = 1
  while (true) yield i++
}

function* take (n, iterable) {
  for (const item of iterable) {
    if (n <= 0) return
    n--
    yield item
  }
}

function* map (iterable, mapFn) {
  for (const item of iterable) {
    yield mapFn(item)
  }
}

console.log([...map(take(5, infinityAndBeyond()), x => x * x)])
