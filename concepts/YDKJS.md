
# JS

## You Don't Know JS Yet: Get Started - 2nd Edition

### Chapter 2: Surveying JS

#### Each File is a Program
* Almost every website (web application) you use is comprised of many different JS files (typically with the .js file extension). It's tempting to think of the whole thing (the application) as one program. But JS sees it differently.

* In JS, each standalone file is its own separate program.

* Many projects use build process tools like webpack or parcel or roll-up that end up combining separate files from the project into a single file to be delivered to a web page. When this happens, JS treats this single combined file as the entire program.

#### typeof caveats
```
typeof null // we expect null but we get object
typeof [] // we expect array but we get object
```

#### Equality check caveats
```
console.log(NaN === NaN) // we expect true but we get false
console.log(0 === -0) // we expect false but we get true
```
objects cannot be checked with strict equal since objects are accessed with references
```
const a = [1, 2, 3]
const b = [1, 2, 3]
console.log(a === b) // false, because we are comparing references
```

#### Coercive Comparisons
Coercion means a value of one type being converted to its respective representation in another type (to whatever extent possible)
can be done using == also called loose equality
where one type gets converted to another
```
console.log(42 == '42') // true
console.log(1 == true) // true
```
coercion first (generally, to numbers) if the types differ
his same will apply to comparison operators like <, > (and even <= and >=).

#### How We Organize in JS
Refer data_and_behaviour_encapsulation folder

### Chapter 3: Digging to the Roots of JS
#### Iteration
Refer iterator.js file

#### Closure
Refer closure.js

#### ```this``` Keyword
Refer this_keyword.js

#### Prototypes
Refer prototypes.js

### Chapter 4: The Bigger Picture

### 3 pillars of JS 
* **Scope and Closure**
* **Prototypes** 
* **Types and Coercion**

## You Don't Know JS Yet: Scope & Closures - 2nd Edition

### Chapter 1: What's the Scope?
#### Compiled vs. Interpreted
**Compilation:**

```
  file                  AST                 Binary        O/P

+--------+               .                  00010
| ______ |     *        / \         *       10010     *
| ______ |    ---->        .      ---->     00100   ---->  abc
| ______ |                / \               00011
|        |               .                  00000
+--------+              / \                 .....
```
**Interpretation:**
```        
 file                    line 1     line 2             line n
                          O/P        O/P                O/P
                           a          b                   c
                          /\         /\                   /\
                           |          |                    |
                ____  ---> *   ____  ---> *     ____  ---> *
+------+      +------+       +------+         +------+
| ____ |      |      |       |      |         |      |
| ____ | ---> | ____ | ----> |      | ........|      |
| ____ |      | ____ |       | ____ |         |      |
|      |      |      |       |      |         |      |
+------+      +------+       +------+         +------+
```
#### Compiling Code
**Scope** in JS primarily determined during compilation, so understanding how compilation and execution relate is key in mastering scope.
In classic compiler theory, a program is processed by a compiler in three basic stages:
* **Tokenizing/Lexing**:
breaking up a string of characters into meaningful (to the language) chunks, called tokens. 
  ex:
  ```
  var a = 10;
  ```
  will be broken into *var*, *a*, *=*, *10*, and *;*
* **Parsing**:
taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This is called an Abstract Syntax Tree (AST).
  ex: 
  ```
  var a = 10;        -->     VariableDeclaration
                                    /  \
                          Identifier    AssignmentExpression
                                 /       \
                                a         10                
  ```
* **Code Generation**:
taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it's targeting, and other factors.
The JS engine takes the just described AST for `var a = 2;` and turns it into a set of machine instructions to actually create a variable called `a` (including reserving memory, etc.), and then store a value into `a`.

### Required: Two Phases
Even though there are many phases in JS, the important ones are,
1. **parsing/compilation**
2. **execution**

It is hard to believe JS will do a compilation/parsing first, but we can prove this observing ***syntax errors***, ***early errors***, and ***hoisting***.
##### Syntax errors
```
var greeting = "Hello";

console.log(greeting);

greeting = ."Hi";
// SyntaxError: unexpected token .
```
If JS was executing this program line by line we could have got *'greeting'* word logged on console, but istead we get a `Syntax error`. The only way JS can identify this error as early as possible is becuase it did a compilation first.
##### Early Errors
```
console.log("Howdy");

saySomething("Hello","Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting,greeting) {
    "use strict";
    console.log(greeting);
}
```
Similar to previous section snippet, we get `Syntax error` before the program is executed. So JS knows there is a duplicate variable as an argument for the function. Again it did a compilation first. 

##### Hoisting
```function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        let greeting = "Hi";
        console.log(greeting);
    }
}

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization
```
If JS was just executing line by line it would have print 'Hello' on the console, But we are getting a `Reference error`. So how JS know that the next line will create a block scoped variable. Again the same reason comes into picture, JS will compile first.

#### Compiler Speak
How JS will identify variables and determine scope as it is doing compilation.
```
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    for (let student of students) {
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
// Suzy
``` 
Other than declarations variables will have 2 roles **target** and **source**
*NOTE: why we are not worried about declarations is because this will be taken care while compilation by generating AST.*

* **target** -> if it is being assigned
* **source** -> if it is not being assigne
##### Targets

1. ```
   for (let student of students) {
   ```
   `student` will be assigned with a value in each iteration
   <br>
2. ```
   getStudentName(73)
   ```
   `73` will be assigned to function parameter `studentID`
    <br>
3. ```
   function getStudentName(studentID) {
   ```
   A `function` declaration is a special case of a `target` reference. You can think of it sort of like 
   `var getStudentName = function(studentID)`
   <br>
   > This automatic association of function and variable is referred to as **function hoisting**.

##### Sources
1.  ```
    for (let student of students) {
    ```
    `students`
    <br>
2.  ```
    if (student.id == studentID)
    ```
    `student` and `studentID`
    <br>
3.  ```
    return student.name
    ```
    `student`
    <br>
> id, name, and log are all properties, not variable references.

#### Cheating: Runtime Scope Modifications
So we clearly understood how scope will be created during comiplation, but we can change this scope and introduce new variables using `eval` and `with` during run time in a **non-strict mode**.

##### `eval`
```
function badIdea() {
    eval("var oops = 'Ugh!';");
    console.log(oops);
}
badIdea();   // Ugh!
```
We are not decalraing `oops` variable so after compilation we will not have `oops` in scope. but we can pass a string to `eval` which will be compiled and executed on run-time. so we can modify the scope by passig a `var` or `function` declaration. Thats what we are doing here. Because of this we are not getting `Reference error`.

##### `with`
```
var badIdea = { oops: "Ugh!" };

with (badIdea) {
    console.log(oops);   // Ugh!
}
```
This will dynamically change object values into local scopes. In the above snippet `badIdea` is getting changes into local scope. thats why we have `oops` variable which is the property of `badIdea`.

> We are modifying the optimised scope which was created on compilation, this will degrade performance and readablity as well. we should avoid this at any cost. we can avoid this by just using `strict mode`.

#### Lexical Scope
JS's scope is determined at compile time; the term for this kind of scope is "lexical scope". "Lexical" is associated with the "lexing" stage of compilation.

The key idea of **lexical scope** is the placement of functions, blocks and variable declarations, in relation to on another.

A target or source variables must be resolved in the scope that is lexically available. if it is not available it consult next enclosing scope on the ladder. This will be continued untill it finds the variable or we reach global scope and no where else to go. If the variable is not there in any scope we get `undeclared` error.

It's important to note that compilation doesn't actually do anything in terms of reserving memory for scopes and variables. None of the program has been executed yet.

Instead, compilation creates a map of all the lexical scopes that lays out what the program will need while it executes. You can think of this plan as inserted code for use at runtime, which defines all the scopes (aka, "lexical environments") and registers all the identifiers (variables) for each scope.

### Chapter 2: Illustrating Lexical Scope

#### Marbles, and Buckets, and Bubbles
This is a metaphor that can be used to memory map lexical scope in JS.
Imagine we have a pile of marbles with 3 colors **Red**, **Blue** and **Green**. Lets sort this based on there color. put all the Red color marbles in Red bucket, all the blue color marbles in blue bucket and all the green color marbles in green bucket.
Next time when we need red marble or green or blue marble we know where to find it.

<div style="display:flex;">
<div style="border: 1px dashed red; margin: 0 20px;">
<pre>
<span style="color:red;">*</span>  <span style="color:red;">*</span>  <span style="color:red;">*</span>
  <span style="color:red;">*</span> <span style="color:red;">*</span>
 <span style="color:red;">*</span> <span style="color:red;">*</span>
</pre>
</div>
<div style="border: 1px dashed blue; margin: 0 20px;">
<pre>
<span style="color:blue;">*</span>  <span style="color:blue;">*</span>  <span style="color:blue;">*</span>
  <span style="color:blue;">*</span> <span style="color:blue;">*</span>
 <span style="color:blue;">*</span> <span style="color:blue;">*</span>
</pre>
</div>
<div style="border: 1px dashed green; margin: 0 20px;">
<pre>
<span style="color:green;">*</span>  <span style="color:green;">*</span>  <span style="color:green;">*</span>
  <span style="color:green;">*</span> <span style="color:green;">*</span>
 <span style="color:green;">*</span> <span style="color:green;">*</span>
</pre>
</div>
</div>


In this metaphor **marbles are variables** and **buckets are fucntions or blocks**, JS have to do the same thing with these variables so that it can get them when it is executing the program. The only diffrence the scopes will be nested in JS.

```
// outer/global scope: RED

var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    // function scope: BLUE

    for (let student of students) {
        // loop scope: GREEN

        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);
console.log(nextStudent);   // Suzy
```

<div style="display:flex; flex-direction: column; align-items: flex-start">
<span style="margin: 0 20px;color:red;">outer/global scope</span>
<div style="border: 1px dashed red; margin: 0 20px;">
<pre>
    <span style="color:red;">students</span> 
    <span style="color:red;">getStudentName</span> 
    <span style="color:red;">nextStudent</span>
</pre>
<span style="margin: 0 20px;color:blue;">function scope</span>
<div style="border: 1px dashed blue; margin: 0 20px 20px;">
<pre>
 <span style="color:blue;">studentID</span>
</pre>
<span style="margin: 0 20px;color:green;">loop scope</span>
<div style="border: 1px dashed green; margin: 0 20px 20px;">
<pre>
<span style="color:green;">student</span>  
</pre>
</div>
</div>
</div>
</div>

An expression in the **RED** bucket **only has access** to **RED marbles**, **not BLUE** or **GREEN**. An expression in the **BLUE bucket** can reference either **BLUE** or **RED** marbles, **not GREEN**. And an expression in the **GREEN** bucket has access to **RED**, **BLUE**, and **GREEN** marbles.

In the program for the
```
for (let student of students) {
```
since the above is not a declaraion, JS will try to get `students` in current **BLUE** scope, but it will not get it. So JS will ask the next outer scope **RED** and gets `students`, because we have `students` in this scope. The same applies for 

#### Lookup Failures
##### Undefined Mess
source varrable -> unresolved -> `ReferenceError`
target varaible -> unresolved -> `ReferenveError`
```
var studentName;
typeof studentName;     // "undefined"

typeof doesntExist;     // "undefined"
```
The above code is confusing because we are getting `undefined` for both declared variable and non-declare variable. But JS is treating both of this in a same manner

#### Global... What!?
If the strict mode is not active and we try to assign a target variable which is not declared, the **Global scope manager** will create a variable to fullfill the target assignment.
```
function getStudentName() {
    // assignment to an undeclared variable :(
    nextStudent = "Suzy";
}

getStudentName();

console.log(nextStudent);
// "Suzy" -- oops, an accidental-global variable!
```
If try the same in strict mode we would get `ReferenceError`, Which is the correct behaviour.
So always use **strict mode**

#### Building On Metaphors
This is another metaphor for lexical scoping
```
       +--------------------+
       |  Global scope      |
       |  +--+  +--+  +--+  |
 /'\   |  |  |  |  |  |  |  |
L | S  |  +--+  +--+  +--+  |
E | c  |  +--+  +--+  +--+  |   
X | O  |  |  |  |  |  |  |  |
I | P  |  +--+  +--+  +--+  |
C | E  |             +---+  |
A |(S) |  current    |   |  |
L |    |   scope     |   |  |
       +-------------+---+--+
```
JS will try to resolve target or source variable in the current floor, If it is not able to find, It will move to next floor and this process will continue untill it finds the variable or it reaches last floor i.e global scope.
