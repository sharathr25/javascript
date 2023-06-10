const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)

function getData (str) {
  console.log(`getting data for ${this.search || str}....`)
}

function debouce (fn, delay) {
  let timerId
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

const deboucedGetData = debouce(getData, 3000)

const obj = { search: 'mobiles', deboucedGetData: debouce(getData, 3000) } // example for object

let str = ''
process.stdin.on('keypress', (char, key) => {
  if (key.ctrl && key.name === 'c') process.exit()
  str += char
  console.log(str)
  // getData() // this will be called whenever a key is pressed which is not good
  // the below will be called only when there is a gap of 3000ms between current event and previous event
  deboucedGetData(str) // example for args passing
  obj.deboucedGetData(str) // example for object & for this also we can pass args
})
console.log('Type anything to search and ctrl+c to exit')

// If we are debouncing for 3000ms
// continuos events -> ........__________.................____...........................__________..........
//                             3000ms gap                 less gap no function call      3000ms gap
//                                       function call                                             function call
