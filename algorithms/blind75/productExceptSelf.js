/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const leftToRight = [];
  const rightToLeft = [];

  for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
    if (leftToRight.length) leftToRight[i] = nums[i] * leftToRight[i - 1];
    else leftToRight[i] = nums[i];
    if (rightToLeft.length) rightToLeft[j] = nums[j] * rightToLeft[j + 1];
    else rightToLeft[j] = nums[j];
  }

  return nums.map((_, i) => {
    if (i === 0) return rightToLeft[i + 1];
    else if (i === nums.length - 1) return leftToRight[i - 1];
    return leftToRight[i - 1] * rightToLeft[i + 1];
  });
};
