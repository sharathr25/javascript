/**
 *
 * @param {*} context
 * @param  {...any} args
 * @returns {Function}
 */
Function.prototype.myBind = function (context, ...args) {
  const fun = this; // we can't do this()[we get TypeError: this is not a function] so storing in a variable
  return function () {
    fun.apply(context, [...args, ...arguments]);
  };
};

const funToBind = function () {
  console.log("I am funToBind", { this: this, arguments: arguments });
  // I am funToBind { this: { a: 1 }, arguments: [Arguments] { '0': 1, '1': 3, '2': 2 } }
};
const binded = funToBind.myBind({ a: 1 }, 1, 3);
binded(2);
