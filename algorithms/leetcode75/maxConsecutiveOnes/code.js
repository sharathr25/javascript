/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let max = -Infinity;
  let flip = k;
  let count = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0 && flip !== 0) {
      count++;
      flip--;
    } else {
      max = Math.max(max, count);
      count = 0;
      flip = k;
      i = start;
      start++;
    }
  }

  return Math.max(max, count);
};

module.exports = { longestOnes };
