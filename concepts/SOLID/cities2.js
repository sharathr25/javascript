const cities = ['Madrid', 'Barcelona', 'New York']

const isAValidCity = cityName => cities.indexOf(cityName) !== -1

const addValidCity = cityName => cities.push(cityName)

module.exports = {
  isAValidCity2: isAValidCity,
  addValidCity: addValidCity
}
