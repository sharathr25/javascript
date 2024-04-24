/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let prevCh = "";
  let count = 0;
  let str = "";
  for (const ch of chars) {
    if (prevCh === "" || ch === prevCh) {
      count++;
    } else {
      str = str + prevCh + (count > 1 ? count : "");
      count = 1;
    }
    prevCh = ch;
  }
  str = str + prevCh + (count > 1 ? count : "");

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i];
  }

  return str.length;
};

module.exports = { compress };
