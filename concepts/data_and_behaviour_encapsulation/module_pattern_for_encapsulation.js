// this pattern is used to provide private and public encapsulation

// we can achieve this by adding everything inside self calling function
// so the scope is encapuslated within this function
const car = (function () {
  let carNumber = null // private variable

  // below method is private but we will return to the outside world, so these are public
  const setCarNumber = number => {
    carNumber = number
  }

  // private, since we are not returning this
  const getCarNumber = () => {
    return carNumber
  }

  return {
    setCarNumber,
    // a public function which is using a private fucntion
    printCarNumber: () => {
      console.log(getCarNumber())
    }
  }
})()

car.setCarNumber(1234)
car.printCarNumber()
car.printCarNumber = () => {
  console.log('override')
}
car.printCarNumber()
