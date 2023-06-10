class Bird {
  layEgg () {
    console.log('egg')
  }
}

class FlyingBird extends Bird {
  fly () {
    console.log('fly')
  }
}

class SwimmingBird extends Bird {
  swim () {
    console.log('swim')
  }
}

class Eagle extends FlyingBird {}
const eagle = new Eagle()
eagle.layEgg()
eagle.fly()

class Penguin extends SwimmingBird {}
const penguin = new Penguin()
penguin.layEgg()
penguin.swim()
