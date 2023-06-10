function fakefetch (url) {
  return new Promise((resolve, reject) => {
    console.log('getting data from ' + url)
    const fakeProduct = {
      name: 'book'
    }
    setTimeout(() => {
        resolve(fakeProduct)
    //   reject('error')
    }, Math.random() * 2000)
  })
}

async function allP (promises) {
  const res = []

  return new Promise((resolve, reject) => {
    promises.forEach(async (p, i) => {
      p.then(data => {
        res.push(data)
        if(res.length === i) resolve(res)
      }).catch(err => reject(err))
    })
  })
}

async function main () {
  try {
    const promises = []
    for (let i = 0; i < 5; i++) {
      const prmosise = fakefetch('https://dummyjson.com/products/1')
      promises.push(prmosise)
    }
    const all = await allP(promises)
    console.log(all)
  } catch (err) {
    console.error(err)
  }
}

main()
