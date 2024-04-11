/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  let max = -Infinity;
  let count = 0;
  let j = 1;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0 && j !== 0) {
      j--;
    } else {
      max = Math.max(max, count);
      count = 0;
      j = 1;
      i = start;
      start++;
    }
  }

  return Math.max(count - j, max);
};

module.exports = { longestSubarray };
