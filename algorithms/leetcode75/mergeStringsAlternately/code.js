/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let res = "";
  const length = Math.max(word1.length, word2.length);

  for (let i = 0; i < length; i++) {
    if (i < word1.length) res += word1[i];
    if (i < word2.length) res += word2[i];
  }

  return res;
};

module.exports = { mergeAlternately };
