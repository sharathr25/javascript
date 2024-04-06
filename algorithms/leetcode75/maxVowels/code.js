/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  let x = 0;
  let y = k - 1;
  let i = 0;
  let count = 0;
  let max = -Infinity;

  while (i < s.length) {
    if (isVowel(s[i])) count++;

    if (i === y) {
      max = Math.max(count, max);
      if (isVowel(s[x])) count--;
      x++;
      y++;
    }
    i++;
  }

  return max;
};

/**
 * @param {string} ch
 * @return {boolean}
 */
const isVowel = (ch) =>
  ch === "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u";

module.exports = { maxVowels, isVowel };
