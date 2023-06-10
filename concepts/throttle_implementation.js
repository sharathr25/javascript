const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

function fireBullets (bullet) {
  let bullets = ''
  for (let i = 1; i <= 10; i++) {
    bullets += this.bullet || bullet
    console.log(bullets)
  }
  console.log('stopped')
}

function throttle (fn, delay) {
  let firing = false
  return function () {
    const context = this
    const args = arguments
    if (firing) return
    fn.apply(context, args)
    firing = true
    setTimeout(() => {
      firing = false
    }, delay)
  }
}

const throttledFireBullets = throttle(fireBullets, 3000)

const gun = {
  bullet: '= ',
  throttledFireBullets: throttle(fireBullets, 3000)
} // example for object

process.stdin.on('keypress', (_, key) => {
  if (key.ctrl && key.name === 'c') process.exit()
  if (key.name !== 'f') return
  // fireBullets('- ) // this will be called whenever a key is pressed which is not good
  // the below will be called only when there is a gap of 3000ms between current call and previous call of the function
  console.log('firing')
  throttledFireBullets('- ') // example for args passing
  gun.throttledFireBullets() // example for object & for this also we can pass args
})
console.log('Type anything to search and ctrl+c to exit')

// If we are throttling for 3000ms
// continuos events -> ......................................
//                     fiiiiiifiiiiiifiiiiiifiiiiiifiiiiiifii
//                      3000ms 3000ms 3000ms 3000ms 3000ms
// f -> fired, i -> ignored
