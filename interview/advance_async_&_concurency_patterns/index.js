const fakeAjax = (url, cb) => {
  const fakeResponse = {
    file1: 'The 1st text',
    file2: 'The 2nd rext',
    file3: 'The 3rd text'
  }

  const randomDelay = Math.round(Math.random() * 5000)

  console.log(`Requesting: ${url}`)

  setTimeout(() => {
    cb(fakeResponse[url])
  }, [randomDelay])
}

const getFile = file =>
  new Promise(resolve => {
    fakeAjax(file, resolve)
  })

// request all files at once in parallel via getFile
const p1 = getFile('file1')
const p2 = getFile('file2')
const p3 = getFile('file3')

// render each one finishes but only once when previous rendering is finishes
p1.then(console.log)
  .then(() => p2)
  .then(console.log)
  .then(() => p3)
  .then(console.log)
  .then(() => console.log('complete'))
