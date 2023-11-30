function debounce(fun, delay = 3000) {
  let timerId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fun.apply(context, args);
    }, [delay]);
  };
}

function throttle(fun, delay = 3000) {
  let fired = false;
  return function () {
    if (fired) return;
    const context = this;
    const args = arguments;
    fun.apply(context, args);
    fired = true;
    setTimeout(() => {
      fired = false;
    }, [delay]);
  };
}

Function.prototype.myBind = function () {
  const fun = this;
  const [context, ...args1] = arguments;
  return function () {
    fun.apply(context, [...args1, ...arguments]);
  };
};

const helloWorld = function (a, b, c) {
  console.log("hello", a, b, c, this);
};
const binded = helloWorld.myBind({ a: 1 }, 1, 3);
binded(2);
