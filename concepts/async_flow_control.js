// Don't change this - You do not have controll over api responses
// ---------------------Do not change ----------------------------
const responses = {
  'File 1': 'This is file 1 data',
  'File 2': 'This is file 2 data',
  'File 3': 'This is file 3 data'
}

const fakeAjax = (url, cb) => {
  const randomDelay = Math.random() * 5000
  console.log(`Requesting ${url}.......`)
  setTimeout(() => {
    cb(responses[url])
  }, randomDelay)
}
// ---------------------Do not change ----------------------------

// asynchronous
const getFile = fileName => {
  fakeAjax(fileName, fileData => console.log(fileData))
}

// making getFile function synchronous
const receivedResponses = {}
const getFileSync = fileName => {
  fakeAjax(fileName, fileData => {
    if (!receivedResponses[fileName]) receivedResponses[fileName] = fileData
    if (
      receivedResponses['File 1'] &&
      receivedResponses['File 2'] &&
      receivedResponses['File 3']
    ) {
      console.log(receivedResponses['File 1'])
      console.log(receivedResponses['File 2'])
      console.log(receivedResponses['File 3'])
    }
  })
}

const getFileSyncWithPromise = fileName => {
  return new Promise((resolve, _) => {
    fakeAjax(fileName, fileData => resolve(fileData))
  })
}

const getFileSyncWithAsyncAwait = fileName => {
  return new Promise((resolve, _) => {
    fakeAjax(fileName, fileData => resolve(fileData))
  })
}

// NOTE: async should be used only when you use await inside a function
const main = async () => {
  //   getFile('File 1')
  //   getFile('File 2')
  //   getFile('File 3')
  // getFileSync('File 1')
  // getFileSync('File 2')
  // getFileSync('File 3')
  // getFileSyncWithPromise('File 1').then((file) => {
  //     console.log(file)
  //     getFileSyncWithPromise('File 2').then((file) => {
  //         console.log(file)
  //         getFileSyncWithPromise('File 3').then((file) => {
  //             console.log(file)
  //         })
  //     })
  // })
  // const file1 = await getFileSyncWithAsyncAwait('File 1')
  // console.log(file1)
  // const file2 = await getFileSyncWithAsyncAwait('File 2')
  // console.log(file2)
  // const file3 = await getFileSyncWithAsyncAwait('File 3')
  // console.log(file3)
}

main()
