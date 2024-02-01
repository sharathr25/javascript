- Order of execution in below program

```javascript
async function f1() {
  await Promise.resolve();
  console.log("f1");
}
function f2() {
  Promise.resolve();
  console.log("f2");
}
function f3() {
  Promise.resolve().then(() => {
    console.log("f3");
  });
}
function f4() {
  console.log("f4");
}
f1();
f2();
f3();
f4();
// f2, f4, f1, f3
// f2, f4 will be executed in the current call stack
// f1, f3 will be pushed to call back queue
```
