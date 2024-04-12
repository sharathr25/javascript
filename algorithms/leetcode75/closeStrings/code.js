/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    freq2[word2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < freq1.length; i++) {
    if (
      (freq1[i] === 0 && freq2[i] !== 0) ||
      (freq1[i] !== 0 && freq2[i] === 0)
    )
      return false;
  }

  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
};

module.exports = { closeStrings };
