# Functional Programming in JavaScript
## When FP is required?
* Extensibility—Do I constantly refactor my code to support additional functionality?
* Easy to modularize—If I change one file, is another file affected?
* Reusability—Is there a lot of duplication?
* Testability—Do I struggle to unit test my functions?
* Easy to reason about—Is my code unstructured and hard to follow?
when the ans is **yes** or **don't know** to any of these questions FP is well suited

## Fundamental concepts of FP
* Declarative programming
* Pure functions
* Referential transparency
* Immutability

### Declarative programming
it’s a paradigm that expresses a set of operations without revealing how they’re implemented or how data flows through them.
suppose we need to find squares of all numbers in the array

Imperative approach would be as below, where we tell how to perform a certain task (looping through and applying the square formula to each number, in this case).
```
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < array.length; i++) {
 array[i] = Math.pow(array[i], 2);
}
array; //-> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
Declarative approach would be as below, where we tell what the program should do
```
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    function(num) {
    return Math.pow(num, 2);
}); 
// -> [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
### Pure functions
* It depends only on the input provided and not on any hidden or external state that may change during its evaluation or between calls.
* It doesn’t inflict changes beyond their scope, such as modifying a global object or a parameter passed by reference.
```
var counter = 0;
function increment() {
    return ++counter;
}
```
The above increment function is an impure function since it is asking and modifying a global object
But, We can convert it to a pure function as below
```
function increment(counter) {
    return counter + 1;
}
```
The above function only depends on input parameters(`counter`) and changes value which is under its scope(`counter`)
In pure functions there shouldn't be any side effects, Side effects can occur in many situations, including these:
* Changing a variable, property, or data structure globally
* Changing the original value of a function’s argument
* Processing user input
* Throwing an exception, unless it’s caught within the same function
* Printing to the screen or logging
* Querying the HTML documents, browser cookies, or databases
### Referential transparency
A function consistently yields the same result on the same input, it’s said to be referentially transparent.
```
var counter = 0;
function increment() {
 return ++counter;
}
```
The above code is not referentially transparent, because the return value depends on the outer variable
we can make this function referentially transparent by removing deplendent state like below
```
function increment(counter) {
 return counter + 1;
}
```
Now this function is stable and always returns the same output when provided with the same input. 
### Immutability
Immutable data is data that can’t be changed after it’s been created.
In FP functions should follow this, It should not alter any data that it has access to.
```
function sortDesc(arr) {
    return arr.sort(function(a,b) {
        return b - a;
    })
}
``` 
Since the above function uses `Array.sort` which sorts the array in place we are modifieng the array in place, So breaking the rule to maintain immutablity
If this `arr` is being used in some other place then we have introduced a risk of getting bugs.