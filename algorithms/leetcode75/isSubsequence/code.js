/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let i = 0;

  for (let j = 0; i < s.length && j < t.length; j++) if (s[i] === t[j]) i++;

  return i === s.length;
};

module.exports = { isSubsequence };
