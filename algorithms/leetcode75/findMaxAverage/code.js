/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let prefixSum = 0;
  let maxAverage = -Infinity;
  for (let i = 0; i < k; i++) {
    prefixSum += nums[i];
  }
  let i = 0;
  let j = k;
  while (j < nums.length) {
    const average = prefixSum / k;
    maxAverage = Math.max(maxAverage, average);
    prefixSum = prefixSum - nums[i++] + nums[j++];
  }
  const average = prefixSum / k;
  maxAverage = Math.max(maxAverage, average);
  return maxAverage;
};

module.exports = { findMaxAverage };
