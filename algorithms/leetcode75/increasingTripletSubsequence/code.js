/**
 * @param {number[]} nums
 * @return {boolean}
 */

const increasingTriplet = function (nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
    }
    if (nums[i] > smallest && nums[i] < secondSmallest) {
      secondSmallest = nums[i];
    }
    if (nums[i] > smallest && nums[i] > secondSmallest) {
      return true;
    }
  }

  return false;
};

module.exports = { increasingTriplet };
