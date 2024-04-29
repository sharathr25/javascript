/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const map = new Map();
  for (const elem of arr) {
    if (!map.has(elem)) map.set(elem, 0);
    map.set(elem, map.get(elem) + 1);
  }

  const set = new Set();
  for (const val of map.values()) {
    if (set.has(val)) return false;
    set.add(val);
  }

  return true;
};

module.exports = { uniqueOccurrences };
