// call, apply and bind
// used to borrow functions
const person1 = {
  firstName: "john",
  lastName: "connor",
};

const person2 = {
  firstName: "kyle",
  lastName: "reese",
};

function printName(separator = "", msg = "") {
  console.log(`${this.firstName} ${this.lastName}${separator}${msg}`);
}

// we can use call or apply to borrow printName function to use with person1 and person2 objects
printName.call(person1);
printName.apply(person2);

// above examples, we can't see diffrence between call and apply
// diffrence comes when we pass args
printName.call(person1, ":", "hi, good morning"); // pass function args comma separated
printName.apply(person1, [":", "hi, good morning"]); // pass function args as an array

// call and apply, immediately executes when we call it. but bind will return a bounded function which can be called later
const printNameBinded = printName.bind(person1);
printNameBinded();

// we can pass args as well for bind, as well for binded function
const printNameBinded2 = printName.bind(person1, ":");
printNameBinded2("hi, good morning");
// ---- or ------
const printNameBinded3 = printName.bind(person1, ":", "hi, good morning");
printNameBinded3();
