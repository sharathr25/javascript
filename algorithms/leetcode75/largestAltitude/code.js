/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  const arr = [0];
  for (let i = 0; i < gain.length; i++) {
    arr[i + 1] = arr[i] + gain[i];
  }
  return Math.max(...arr);
};

module.exports = { largestAltitude };
