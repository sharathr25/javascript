process.nextTick(() => {
  console.log('2 - next tick')
})

console.log('1 - current')

setImmediate(() => {
  console.log('4 - immediate')
})

setTimeout(() => {
  console.log('3 - timer out')
}, 0)
