const cart = ['pen', 'book', 'shirt']

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  // then of proceedToPayment
  .then(function (message) {
    console.log(message)
  })
  .catch(function (error) {
    console.log(error.message) // I will handle only above 'thens' in the chain
  })
  .then(function () {
    console.log('I will get called at last all the time')
  })

/////////////////////////////
function createOrder (cart) {
  return new Promise(function (resolve, reject) {
    if (validateCart(cart)) {
      // mimicing db call using set timeout
      setTimeout(function () {
        const orderId = 'order11' + Math.random().toFixed(2)
        resolve(orderId)
      }, Math.random() * 2000)
    } else {
      reject(new Error('Cart is not valid'))
    }
  })
}

function validateCart (cart) {
  if (cart.length) return true
  return false
}

function proceedToPayment (orderId) {
  return new Promise(function (resolve) {
    // mimicing db call using set timeout
    setTimeout(function () {
      resolve(`payment done for order ID:${orderId}`)
    }, Math.random() * 2000)
  })
}
