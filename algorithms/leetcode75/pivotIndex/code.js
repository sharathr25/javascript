/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const leftSums = [];
  const rightSums = [];
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    leftSums[i] = leftSum;
    leftSum += nums[i];
    rightSums[j] = rightSum;
    rightSum += nums[j];
  }
  for (let i = 0; i < leftSums.length; i++) {
    if (leftSums[i] === rightSums[i]) return i;
  }
  return -1;
};

module.exports = { pivotIndex };
