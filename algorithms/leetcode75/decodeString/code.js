/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch !== "]") {
      stack.push(ch);
      if (i !== s.length - 1) {
        continue;
      }
    }

    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }

    let num = "";
    cur = stack.pop();
    while (/[0-9]/.test(cur)) {
      num += cur;
      cur = stack.pop();
    }

    stack.push(cur);
    stack.push(str.repeat(parseInt(num)));
  }

  return stack.join("");
};

module.exports = { decodeString };
