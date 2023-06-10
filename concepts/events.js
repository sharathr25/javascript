const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('SEND_EMAIL_NOTIFICATION', userName => {
  console.log('\n==============')
  console.log(`Sending email notifcation to ${userName}......`)
  console.log('==============')
})

eventEmitter.once('SEND_EMAIL_NOTIFICATION_ONCE', userName => {
  console.log('\n==============')
  console.log(`Sending email notifcation to ${userName}......`)
  console.log('done and I will no longer be called again')
  console.log('==============')
})

setTimeout(() => {
  eventEmitter.emit('SEND_EMAIL_NOTIFICATION', 'john_connor')
}, Math.random() * 5000)

setTimeout(() => {
  eventEmitter.emit('SEND_EMAIL_NOTIFICATION', 'terminator')
}, Math.random() * 5000)

setTimeout(() => {
  eventEmitter.emit('SEND_EMAIL_NOTIFICATION_ONCE', 'kyle_reese')
}, Math.random() * 5000)

setTimeout(() => {
  eventEmitter.emit('SEND_EMAIL_NOTIFICATION_ONCE', 'sarah_connor')
}, Math.random() * 5000)
