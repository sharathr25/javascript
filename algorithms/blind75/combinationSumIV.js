/*

Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

Example 1:
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

Example 2:
Input: nums = [9], target = 3
Output: 0

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target, memo = {}) {
  if (target in memo) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += combinationSum4(nums, target - nums[i], memo);
  }

  memo[target] = count;
  return count;
};
