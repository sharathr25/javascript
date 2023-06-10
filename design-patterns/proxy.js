class CryptoCurrencyAPI {
  constructor () {
    this.getValue = function (coin) {
      console.log('calling extrnal API.....')
      switch (coin) {
        case 'Bitcoin':
          return '$100'
        case 'Litecoin':
          return '$50'
        case 'Etherium':
          return '$175'
        default:
          throw new Error('Ivalid coin')
      }
    }
  }
}

class CryptoCurrencyAPIProxy extends CryptoCurrencyAPI {
  constructor () {
    super()
    this.cache = {}
    this.getValue = function (coin) {
      if (this.cache[coin]) return this.cache[coin]
      const value = super.getValue(coin)
      this.cache[coin] = value
      return value
    }
  }
}

const api = new CryptoCurrencyAPI()
console.log(api.getValue('Bitcoin'))
console.log(api.getValue('Litecoin'))
console.log(api.getValue('Etherium'))

console.log('===========')
const proxyApi = new CryptoCurrencyAPIProxy()
console.log(proxyApi.getValue('Bitcoin'))
console.log(proxyApi.getValue('Litecoin'))
console.log(proxyApi.getValue('Etherium'))
console.log(proxyApi.getValue('Etherium'))
console.log(proxyApi.getValue('Etherium'))
console.log(proxyApi.getValue('Litecoin'))
console.log(proxyApi.getValue('Litecoin'))
