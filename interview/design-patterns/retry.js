const sleep = async delay => new Promise(resolve => setTimeout(resolve, delay))

const fakeApi = async () => {
  await sleep(3000)
  if (Math.random() < 0.2) return true
  throw new Error()
}

const callApi = async (maxAttempts = 3) => {
  let currentAttempt = 0
  while (currentAttempt < maxAttempts) {
    try {
      console.log('calling API....')
      await fakeApi()
      console.log('Success')
      break
    } catch (error) {
      currentAttempt++
      console.log(`Attempt ${currentAttempt} failed, Trying again...`)
    }
  }
}

callApi()
