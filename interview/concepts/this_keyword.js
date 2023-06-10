// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

// method -> obj
const video = {
  title: 'a',
  tags: ['tag 1', 'tag 2', 'tag 3'],
  play () {
    console.log(this)
  },
  showTags () {
    this.tags.forEach(function (tag) {
      // this.title will be undefined here
      // since a call back is a function which will be excuted in global scope
      // see below showTags2 or showTag3 function where we solve this problem with diffrent approaches
      console.log(tag, this.title)
    })
  },
  showTags2 () {
    this.tags.forEach(function (tag) {
      // forEach call back takes 2 args, 2nd one we can pass this arg
      console.log(tag, this.title)
    }, this)
  },
  showTags3 () {
    this.tags.forEach(tag => {
      // forEach call back is an arrow function
      // arrow function is lexically scoped
      // means 'this' will be the object where this arrow function is defined i.e in the video object
      console.log(tag, this.title)
    })
  }
}

video.play()

video.stop = function name () {
  console.log(this)
}

video.stop()

// function -> global(window, global)
function playVideo () {
  console.log(this)
}

playVideo()

// but the above is not true for constructor function even thogh its a function, lets see below
// constructor function
// when we call with 'new' this will create a new object so 'this' refers to the newly created object
function Car (carNumber) {
  this.carNumber = carNumber
  console.log(this)
}

const car = new Car('KA-01-1234')

video.showTags()
video.showTags2()
video.showTags3()
