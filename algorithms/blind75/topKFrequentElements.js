/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const map = new Map()

  nums.forEach(n =>
    map.set(n, { value: n, count: map.has(n) ? map.get(n).count + 1 : 1 })
  )

  return [...map.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, k)
    .map(({ value }) => value)
}
