/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = new Map();
  const size = nums.length;
  for (const n of nums) {
    if (!map.has(n)) map.set(n, 0);
    const c = map.get(n) + 1;
    if (c > size / 2) return n;
    else map.set(n, c);
  }
};
