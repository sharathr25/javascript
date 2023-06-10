class Bird {
  fly () {
    console.log('fly')
  }
}

class Eagle extends Bird {}

const eagle = new Eagle()
eagle.fly()

class Penguin extends Bird {
  // problem: penguins can't fly, but by extending Bird we got fly function
}
