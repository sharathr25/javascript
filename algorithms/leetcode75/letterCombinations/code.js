/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const digitMapings = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];

  const fun = (s, i, res) => {
    if (i === digits.length) {
      if (s.length) {
        res.push(s);
      }

      return;
    }
    for (const ch of digitMapings[digits[i]]) {
      fun(s + ch, i + 1, res);
    }
  };

  fun("", 0, res);

  return res;
};

module.exports = { letterCombinations };
